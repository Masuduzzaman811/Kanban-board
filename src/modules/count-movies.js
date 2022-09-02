const countMovies = (allMovies) => {

    const moviesId = document.getElementById('allmovies');
    moviesId.innerText = allMovies.length;
}
export default countMovies;