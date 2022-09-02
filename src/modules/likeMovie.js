import createLikesApi from './createLikesApi.js';

const likeMovie = () => {
  const likeButton = document.querySelectorAll('.like-button');
  likeButton.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const movieId = element.getAttribute('id');
      createLikesApi(movieId);
      const numberLikes = element.lastElementChild.textContent;
      let totalLikes = parseInt(numberLikes, 10);
      totalLikes += 1;
      element.lastElementChild.textContent = totalLikes;
    });
  });
};

export default likeMovie;