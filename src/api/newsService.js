const API_KEY = "caf5f61be68c4f2f85d2361b2455c319";
const API_URL = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${API_KEY}`;

const dummyArticles = [
  {
    source: { name: "CNN Indonesia" },
    title: "Pemerintah Umumkan Kebijakan Baru",
    urlToImage: "https://via.placeholder.com/600x300",
    publishedAt: "2025-02-26T10:00:00Z",
  },
  {
    source: { name: "Kompas" },
    title: "Ekonomi Indonesia Tumbuh di Tahun 2025",
  },
  {
    source: { name: "BBC Indonesia" },
    title: "Teknologi AI Meningkat Pesat di Asia",
  },
  {
    source: { name: "BBC Indonesia" },
    title: "Teknologi AI Meningkat Pesat di Asia",
  },
  {
    source: { name: "BBC Indonesia" },
    title: "Teknologi AI Meningkat Pesat di Asia",
  },
];

export const fetchNews = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (data.articles && data.articles.length > 0) {
      return data.articles;
    } else {
      return dummyArticles;
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    return dummyArticles;
  }
};
