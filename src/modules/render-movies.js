import commentImage from '../images/chat.png';
import countMovies from './count-movies.js';
import likeMovie from './likeMovie.js';

const renderMovies = async (allMovies) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eGZ62GeBh7TTirykKrEX/likes/');

  const results = await response.json();
  console.log(results);

  allMovies.forEach((element) => {
    const likesids = results.find(like => like.item_id === 'item'+element.id);
    let counterlikes = likesids?.likes;

    if(counterlikes === undefined){
      counterlikes = 0;
    }

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
        <div class="like-button" id="item${element.id}">
        <i class="like-icon far fa-thumbs-up"></i><span class="like-icon-text">${counterlikes}</span>
     
      </div>
        <div class="comment-movie">
        <img src="${commentImage}" class="comment-icon" id="${element.id}"><span class="icon-text">130</span>
        </div>
      </div>
          </div>
        </div>`;

  });
  countMovies(allMovies);
  likeMovie()








}
export default renderMovies;