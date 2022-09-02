import likeImage from '../images/like.png';
import commentImage from '../images/chat.png';

const displayComedy = (comedymovies) => {
    const comedyCounter = document.getElementById('comendycount');
      
comedymovies.forEach((element, i) => {
const genresArray = element.genres
      if(genresArray[0] === 'Comedy'){
       //console.log(genresArray)
    const { summary } = element;
    const replaceP = summary.replace('<p>', ' ');
    const replaceClosedP = replaceP.replace('</p>', ' ');
    const replaceB = replaceClosedP.replace('<b>', ' ');
    const replaceCloseB = replaceB.replace('</b>', ' ');
    const words = replaceCloseB.split(' ').slice(0, 8).join(' ');
            document.querySelector('.movie-list-wrapper-comedy').innerHTML += `
            <div class="movie-list">
            <img class="movie-list-item-img" src="${element.image.medium}">
            <div class="movie-list-buttons">
            <div class="movie-name">${element.name}</div>
            <div class="movie-desc">${words}...</div>
            <div class="like-comment-cat">
            <div class="like-button">
          <img src="${likeImage}" class="like-icon" id="item${element.id}"><span></span>
          </div>
            <div class="comment-movie">
            </div>
          </div>
              </div>
            </div>`;
       }
      
   });      

}
export default displayComedy;