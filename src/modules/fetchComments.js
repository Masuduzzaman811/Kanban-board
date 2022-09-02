import showComments from "./showComments.js";

const fetchComments = async (itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MqYDJtfDU0rHErulpT7W/comments?item_id=${itemId}`);

  const results = await response.json();

  // results.forEach((item) => {
  //   showComments(item.creation_date, item.username, item.comment, results.length);
  //   console.log(item);
  // });
  console.log(results);
}

export default fetchComments;