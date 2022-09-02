const countComments = (results) => {
  const commentsCounter = results.length;
  const counterDiv = document.getElementById('mod-comment-head');
  counterDiv.innerHTML += `
  <span id="comment-count">(${commentsCounter})</span>`;
};
export default countComments;