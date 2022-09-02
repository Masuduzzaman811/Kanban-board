import closeModal from "./closeModal.js";

const modal = (movie) => {
  const movieItem = movie[0];
  const modalConainer = document.querySelector('#modal');
  modalConainer.innerHTML = `
    <div class="mod-separate">
      <span class="close">&times;</span>
      <div class="modal-container">
        <div class="modal-details">

          <div class="mod-img">
            <img src="${movieItem.image.medium}" class="responsive" alt="movie-poster">
          </div>

          <h1>${movieItem.name}</h1>
          <div class="mod-about">
            <p class="movie-details">Genre: ${movieItem.genres}</p>
            <p class="movie-details">Type: ${movieItem.type}</p>
            <p class="movie-details">Premiered: ${movieItem.premiered}</p>
            <p class="movie-details">Language: ${movieItem.language}</p> 
            </div>
            </div>
        <div class="modal-show-comment">
          <h2 id="mod-comment-head">Comments <span id="comment-count">(3)</span></h2>
          <div class="comment-box">
            <p>Comment 1: lkfleklf Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, neque.</p>
            <p>Comment 2: Lorem ipsum dolor sit amet.</p>
            <p>Comment 3: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
            <div class="modal-add-comment">
          <h2 class="add-commnet-header">Add a comment</h2>
          <input type="text" id="input-name" class="comment-input" placeholder="Your name">
          <textarea name="input-comment" id="input-comment" class="comment-input comment-area" placeholder="Your comment"></textarea>
          <button type="submit" id="submit-comment">Comment</button>
        </div>
      </div>
    </div>`;

  closeModal(modalConainer);
}
export default modal;