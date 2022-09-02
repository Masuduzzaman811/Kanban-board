import likeMovie from './likeMovie.js';
import displayMovies from './displayMovies.js';

const fecthMovieList = async () => {
  const response = await fetch('https://api.tvmaze.com/shows?page=1');
  const data = await response.json();
  const size = 50;
  const movies = data.slice(0, size);

  displayMovies(movies);
  likeMovie();
};

export default fecthMovieList;