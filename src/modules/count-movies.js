const countMovies = (allMovies) => {
  const moviesId = document.getElementById('allmovies');
  moviesId.innerText = `Movies (${allMovies.length})`;
};
export default countMovies;