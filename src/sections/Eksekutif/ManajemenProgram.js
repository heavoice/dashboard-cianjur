import { useCallback, useEffect, useState } from "react";
import { BiTask } from "react-icons/bi";
import { MdUploadFile } from "react-icons/md";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import logo from "../../assets/img/logo.png";
import { PrevButton, NextButton } from "../../components/EmblaButton";
import { Feedback } from "../../api/Feedback";
import { RSLoader } from "../../components/RSLoader";

const itemsPerPage = 5;

const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const onNextButtonClick = useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
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
  const { feedbackList, loading, error } = Feedback();
  const [slides, setSlides] = useState([]);
  const [namaKegiatan, setNamaKegiatan] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(feedbackList.length / itemsPerPage);

  const paginatedData = feedbackList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    fetch(`${API_URL}/dokumentasi`)
      .then((res) => res.json())
      .then(setSlides);
  }, [API_URL]);

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

  if (loading)
    return (
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl h-screen mb-8 flex justify-center items-center rounded-lg">
        <RSLoader />
      </div>
    );
  if (error)
    return (
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl h-screen mb-8 flex justify-center items-center rounded-lg">
        <RSLoader />
      </div>
    );

  return (
    <div className="text-2xl font-bold flex flex-col h-auto gap-2">
      <p className="font-nunito font-bold">Manajemen Program & Kegiatan</p>
      <p className="font-nunito font-normal text-sm">
        Manajemen Program & Kegiatan adalah fitur yang dirancang untuk membantu
        pengguna dalam mengelola berbagai program dan kegiatan secara
        terstruktur dan efisien...
      </p>

      <div className="w-full flex flex-col gap-6 rounded-lg mt-6">
        <div className="p-8 border rounded-lg bg-white font-nunito">
          {/* Header */}
          <div className="flex items-center">
            <Link to="/home" className="flex items-center space-x-2 p-2.5">
              <img src={logo} width={35} height={35} alt="SLP Logo" />
            </Link>
            <p className="text-lg">Dokumentasi Program & Kegiatan</p>
          </div>

          {/* Form Upload */}
          <form
            className="flex flex-col gap-4 mt-3 p-2.5"
            onSubmit={handleSubmit}
          >
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
            >
              Upload
            </button>
          </form>

          {/* Carousel */}
          <section className="embla mt-6 relative overflow-hidden p-2.5">
            <div
              className="embla__viewport overflow-hidden w-full"
              ref={emblaRef}
            >
              <div className="embla__container flex justify-start">
                {slides?.length > 0 ? (
                  slides.map(
                    ({ id, fileType, fileUrl, activityName, uploadedAt }) => (
                      <div className="embla__slide flex-[0_0_100%]" key={id}>
                        {fileType?.startsWith("image") ? (
                          <img
                            src={fileUrl}
                            alt={activityName}
                            className="w-full h-[600px] object-cover rounded-lg"
                          />
                        ) : fileType?.startsWith("video") ? (
                          <video
                            controls
                            className="w-full h-[600px] object-cover rounded-lg"
                          >
                            <source src={fileUrl} />
                            Browser tidak mendukung video.
                          </video>
                        ) : (
                          <div className="w-full h-[600px] flex items-center justify-center bg-gray-200 rounded-lg" />
                        )}
                        <div className="mt-6">
                          <h1 className="font-bold text-3xl">{activityName}</h1>
                          <p className="font-light text-base mt-1">
                            Tanggal:{" "}
                            {new Date(uploadedAt).toLocaleDateString("id-ID", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <div className="w-full h-[600px] flex items-center justify-center bg-gray-200 rounded-lg" />
                )}
              </div>
            </div>

            <div className="flex items-center justify-center pointer-events-none gap-3 mt-5">
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
      <div className="w-full flex flex-col gap-6 rounded-lg mt-6">
        <div className="p-8 border rounded-lg bg-white font-nunito">
          {/* Header */}
          <div className="flex items-center">
            <Link to="/home" className="flex items-center space-x-2 p-2.5">
              <img src={logo} width={35} height={35} alt="SLP Logo" />
            </Link>
            <p className="text-lg">Feedback dari Pengguna Dashboard Cianjur</p>
          </div>
          {/* Table */}
          <div className="relative overflow-x-auto py-2 ">
            <table className="w-full text-sm text-left text-black font-nunito">
              <thead className="text-xs text-black uppercase border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pesan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Topik
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kepuasan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Timestamp
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b border-gray-200"
                  >
                    <td className="px-6 py-4">{item.nama}</td>
                    <td className="px-6 py-4">{item.pesan}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-row flex-wrap gap-2">
                        {item.topik.split(",").map((topik, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center px-4 py-2 rounded-lg bg-[#22a9e1] text-white text-xs"
                          >
                            {topik.trim()}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.kepuasan}</td>
                    <td className="px-6 py-4">{item.formattedDate}</td>
                  </tr>
                ))}
              </tbody>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <tfoot>
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-2 mt-4">
                        {Array.from({ length: totalPages }, (_, i) => (
                          <button
                            key={i}
                            className={`px-3 py-1 rounded-md ${
                              currentPage === i + 1
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => setCurrentPage(i + 1)}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
