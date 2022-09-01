import likeMovie from "./likeMovie.js";
const movieList = async () => {
  const response = await fetch('https://api.tvmaze.com/shows?page=1');
  const data = await response.json();
  const size = 50;
  const movies = data.slice(0, size);
  movies.forEach((element) => {
    const { summary } = element;
    const replaceP = summary.replace('<p>', ' ');
    const replaceClosedP = replaceP.replace('</p>', ' ');
    const replaceB = replaceClosedP.replace('<b>', ' ');
    const replaceCloseB = replaceB.replace('</b>', ' ');
    const words = replaceCloseB.split(' ').slice(0, 8).join(' ');

    document.querySelector('.movie-list-wrapper').innerHTML += `
        <div class="movie-list">
        <img class="movie-list-item-img" src="${element.image.medium}">
        <div class="movie-list-buttons">
        <div class="movie-name">${element.name}</div>
        <div class="movie-desc">${words}...</div>
        <div class="like-comment-cat">
        <div class="like-button">
       <span class="likes-count" id="like-${element.id}"> <i class="movie-icon thumbs far fa-thumbs-up"></i> 150 Likes</span>
      </div>
        <div class="comment-movie">
        
        <a href="#"><i class="movie-icon fas fa-message"></i></a><span class="likes-count">Comments</span>
        </div>
      </div>
         </div>
        </div>`;
  });
  likeMovie(movies);
};

export default movieList;