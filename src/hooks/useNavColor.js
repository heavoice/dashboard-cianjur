import { useEffect, useState } from "react";

const useNavbarColor = () => {
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth; // Ambil lebar layar

      // Hanya ubah warna navbar jika ukuran layar >= md (768px)
      if (screenWidth >= 1024) {
        if (scrollPosition === 0) {
          setNavbarColor("bg-transparent");
        } else if (scrollPosition <= 650) {
          setNavbarColor("backdrop-blur-md bg-white/10");
        } else {
          setNavbarColor("bg-green-600");
        }
      } else {
        setNavbarColor("bg-green-600"); // Warna default untuk layar kecil
      }
    };

    // Panggil handleScroll saat pertama kali dijalankan
    handleScroll();

    // Tambahkan event listener
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Update warna jika ukuran layar berubah

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return navbarColor;
};

export default useNavbarColor;
