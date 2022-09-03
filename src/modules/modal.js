import closeModal from './closeModal.js';
import postCommentsApi from './postComment.js';
import fetchComments from './fetchComments.js';
import showComments from './showComments.js';

const modal = (movie) => {
  const movieItem = movie[0];
  const modalConainer = document.querySelector('#modal');
  fetchComments(movieItem.id);
  modalConainer.innerHTML = `
    <div class="mod-separate">
      <span class="close">&times;</span>
      <div class="modal-container">
        <div class="modal-details">
          <div class="mod-img">
            <img src="${movieItem.image.medium}" class="responsive" alt="movie-poster">
          </div>
          <h1 class="movie-name-modal">${movieItem.name}</h1>
          <div class="mod-about">
            <p class="movie-details">Genre: ${movieItem.genres}</p>
            <p class="movie-details">Type: ${movieItem.type}</p>
            <p class="movie-details">Premiered: ${movieItem.premiered}</p>
            <p class="movie-details">Language: ${movieItem.language}</p>
            </div>
            </div>
        <div class="modal-show-comment">
        <h5 id="mod-comment-head">Comments</h5>
        </div>
        </div>
            <form class="modal-add-comment" id="commentform">
          <h4 class="add-commnet-header">Add a comment</h2>
          <input type="text" id="inputname" class="comment-input" placeholder="Your name">
          <textarea name="inputcomment" id="inputcomment" class="comment-input comment-area" placeholder="Your comment"></textarea>
          <button type="submit" id="submit-comment">Comment</button>
        </form>
      </div>
    </div>`;
  const username = document.getElementById('inputname');
  const userComment = document.getElementById('inputcomment');
  document.getElementById('commentform').addEventListener('submit', (e) => {
    e.preventDefault();
    postCommentsApi(movieItem.id, username.value, userComment.value);
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${year}-${month}-${day}`;
    const addedComments = [
      {
        comment: userComment.value,
        username: username.value,
        creation_date: currentDate,
      },
    ];
    showComments(addedComments);
  });
  closeModal(modalConainer);
};
export default modal;