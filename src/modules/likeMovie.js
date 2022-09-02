import createLikesApi from "./createLikesApi.js";

const likeMovie = () => {
    const likeButton = document.querySelectorAll('.like-button');
    likeButton.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
           const movieId = element.getAttribute('id');
          createLikesApi(movieId);
          let numberLikes = element.lastElementChild.textContent;
            numberLikes ++;
          element.lastElementChild.textContent = numberLikes
        })
 
    });
}

export default likeMovie;