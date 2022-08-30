const movieList = async () => {
    const response = await fetch('https://api.tvmaze.com/shows?page=1');
    const data = await response.json();
    const size = 5;
    const firstFiveData = data.slice(0, size);
    firstFiveData.forEach(element => {
      const summary = element.summary;
      const replaceP = summary.replace('<p>',' ');
      const replaceClosedP = replaceP.replace('</p>',' ')
      const words = replaceClosedP.split(' ').slice(0, 8).join(' ');
        document.querySelector('.movie-list-wrapper').innerHTML += `
        <div class="movie-list">
        <img class="movie-list-item-img" src="${element.image.medium}">
        <div class="movie-list-buttons">
        <div class="movie-name">${element.name}</div>
        <div class="movie-desc">${words}...</div>
        <div class="like-button">
        <a href="#"><i class="movie-icon far fa-thumbs-up"></i></a><span class="likes-count">50 Likes</span>
      </div>
        <div class="comment-movie">
        <a href="#"><i class="movie-icon fas fa-message"></i></a><span class="likes-count">Comments</span>
      </div>
         </div>
        </div>`;
    });
}

export default movieList;