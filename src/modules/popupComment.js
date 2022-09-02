import modalComment from './modal.js';

const popupComment = (movies) => {
  const modal = document.getElementById('modal');
  const showCommentPop = document.querySelectorAll('.show-comment-popup');
  showCommentPop.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'block';
      const movieId = e.target.id;
      const clickedMovie = movies.filter((movie) => movie.id === parseInt(movieId, 10));
      modalComment(clickedMovie);
    });
  });

};
export default popupComment;
