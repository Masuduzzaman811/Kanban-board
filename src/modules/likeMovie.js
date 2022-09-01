import createApp from "./createApp.js";

const likeMovie = () => {
    const likeButton = document.querySelectorAll('.likes-count');
    likeButton.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
           const movieId = e.target.id;
            createApp(movieId); 
        })
 
    });
}

export default likeMovie;