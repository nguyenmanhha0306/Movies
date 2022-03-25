const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "573d247cfd2a1c6af1430d398c242858",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
