import { useEffect, useState } from "react";

export const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/umpan`)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.map((item) => {
          const date = new Date(item.createdAt);
          const formattedDate = date.toLocaleString("id-ID", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });

          return {
            id: item.id,
            nama: item.nama,
            pesan: item.pesan,
            topik: item.topik,
            kepuasan: item.kepuasan,
            formattedDate,
          };
        });
        setFeedbackList(filteredData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { feedbackList, loading, error };
};
