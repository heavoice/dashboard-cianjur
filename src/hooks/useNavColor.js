import { useEffect, useState } from "react";

const useNavbarColor = () => {
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // If scroll is at the top of the page, set navbar to transparent
      if (scrollPosition === 0) {
        setNavbarColor("bg-transparent");
      } else if (scrollPosition <= 650) {
        setNavbarColor("backdrop-blur-md bg-white/10");
      } else {
        setNavbarColor("bg-green-600");
      }
    };

    // Add the event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs once

  return navbarColor;
};

export default useNavbarColor;
