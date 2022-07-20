const key = "048dd15290f9d1f1f6ff12cea56ed97d"

const requests = {
    
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=fr&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=fr&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=fr&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=fr&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=fr&page=1`,
    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=fr`
  };

  export default requests