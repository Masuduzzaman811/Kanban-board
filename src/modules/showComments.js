const showComments = (date, user, comment, counter) => {
  const commentBox = document.querySelector('.comment-box');
  const commentCunter = document.getElementById('comment-count');

  commentCunter.innerText = `(${counter})`
  commentBox.innerHTML += `<p><span>${date} </span> <span> ${user}</span> <span> ${comment}</span></p>`;
}
export default showComments;