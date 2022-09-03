const showComments = (results) => {
  const commentContainer = document.querySelector('.modal-show-comment');
  const resultsArray = results;
  resultsArray.forEach((element) => {
    commentContainer.innerHTML += `
    <div class="comment-box">
    <p class="comments"><span>${element.creation_date}: </span><span>${element.username} - </span>${element.comment}</p>`;
  });
};
export default showComments;