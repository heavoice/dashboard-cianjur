import { useEffect, useState } from "react";

export const Banner = () => {
  const [banner, setBanner] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/dokumentasi`);
        const data = await response.json();
        setBanner(data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchData();
  }, []);

  return banner;
};
