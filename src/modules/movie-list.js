const movieList = async () => {
    const response = await fetch('https://api.tvmaze.com/shows?page=1');
    const data = await response.json();
    const size = 5;
    const firstFiveData = data.slice(0, size);
    firstFiveData.forEach(element => {
      console.log(firstFiveData);
      const summ = element.summary;
      const replced = summ.replace('<p>',' ');
      const replaceClosed = replced.replace('</p>',' ')
      
      const words = replaceClosed.split(' ').slice(0, 8).join(' ');
      console.log(words);

        document.querySelector('.movie-list-wrapper').innerHTML += `
        <div class="movie-list">
        <img class="movie-list-item-img" src="${element.image.medium}">
        <div class="movie-list-buttons">
        <div class="movie-name">${element.name}</div>
        <div class="movie-desc">${words}...</div>
        <div class="like-button">
        <a href="#"><i class="like-btn fas fa-heart"></i></a><span class="likes-count">50 Likes</span>
      </div>
        <div class="comment-movie">
        <a href="#"><i class="like-btn fas fa-thumbs-up"></i></a><span class="likes-count">Comments</span>
      </div>
         </div>
        </div>`;
    });
}

export default movieList;