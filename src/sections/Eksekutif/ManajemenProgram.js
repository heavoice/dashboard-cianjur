import { useCallback, useEffect, useState } from "react";
import { BiTask } from "react-icons/bi";
import { MdUploadFile } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "../../components/EmblaButton";

const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const ManajemenProgram = (options = { loop: true }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [slides, setSlidesData] = useState([]);
  const [namaKegiatan, setNamaKegiatan] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {
    fetch(`${API_URL}/dokumentasi`)
      .then((res) => res.json())
      .then(setSlidesData);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kegiatan", namaKegiatan);
    formData.append("media", selectedFile);

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    alert(result.message);
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="text-2xl font-bold flex flex-col h-auto gap-2">
      <p className="font-nunito font-bold">Manajemen Program & Kegiatan</p>
      <p className="font-nunito font-normal text-sm">
        Manajemen Program & Kegiatan adalah fitur yang dirancang untuk membantu
        pengguna dalam mengelola berbagai program dan kegiatan secara
        terstruktur dan efisien. Melalui fitur ini, pengguna dapat membuat,
        memantau, serta mendokumentasikan setiap kegiatan mulai dari
        perencanaan, pelaksanaan, hingga pelaporan akhir.
      </p>
      <div className="w-full flex flex-col gap-6 rounded-lg mt-6">
        <div className="p-8 border rounded-lg bg-white font-nunito">
          <div className="flex flex-row items-center">
            <Link to="/home" className="flex items-center space-x-2 p-2.5">
              <img src={logo} width={35} height={35} alt="SLP Logo" />
            </Link>
            <p className="text-lg">Dokumentasi Program & Kegiatan</p>
          </div>

          <form className="flex flex-col gap-4 mt-3 p-2.5">
            <div>
              <label className="text-base font-bold text-gray-900 flex items-center">
                <BiTask className="text-2xl mr-1" />
                Nama Kegiatan
              </label>
              <input
                type="text"
                name="kegiatan"
                value={namaKegiatan}
                onChange={(e) => setNamaKegiatan(e.target.value)}
                className="bg-gray-50 border font-normal border-gray-300 text-gray-900 text-base rounded-lg w-full p-2.5 mt-3"
              />
            </div>

            <div>
              <label className="text-base font-bold text-gray-900 flex items-center">
                <MdUploadFile className="text-2xl mr-1" />
                Upload Foto/Video
              </label>
              <input
                type="file"
                name="media"
                accept="image/*,video/*"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="bg-gray-50 border font-normal border-gray-300 text-gray-900 text-base rounded-lg w-full p-2.5 mt-3"
              />
            </div>

            <button
              type="submit"
              className="w-fit bg-[#22a9e1] text-white py-2.5 px-8 mt-3 rounded-lg font-semibold text-base hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Upload
            </button>
          </form>

          <section className="embla mt-6 relative overflow-hidden">
            <div
              className="embla__viewport overflow-hidden w-full"
              ref={emblaRef}
            >
              <div className="embla__container flex justify-start">
                {slides?.length > 0 ? (
                  slides.map((item, index) => (
                    <div
                      className="embla__slide flex-[0_0_100%] px-4"
                      key={item.id}
                    >
                      <div className="text-center font-bold mb-2">
                        {item.activityName}
                      </div>
                      {item.fileType?.startsWith("image") ? (
                        <img
                          src={item.fileUrl}
                          alt={item.activityName}
                          className="w-full h-[500px] object-cover rounded-lg"
                        />
                      ) : item.fileType?.startsWith("video") ? (
                        <video
                          controls
                          className="w-full h-[500px] object-cover rounded-lg"
                        >
                          <source src={item.fileUrl} type="video/mp4" />
                          Your browser does not support video.
                        </video>
                      ) : (
                        <div className="w-full h-[300px] flex items-center justify-center bg-gray-200 rounded-lg">
                          Tidak ada dokumentasi
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="w-full xh-[300px] flex items-center justify-center bg-gray-200 rounded-lg">
                    Tidak ada dokumentasi
                  </div>
                )}
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <div className="pointer-events-auto">
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
              </div>
              <div className="pointer-events-auto">
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
