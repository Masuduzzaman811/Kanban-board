import showComments from './showComments.js';
import countComments from './countComment.js';

const fetchComments = async (itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MqYDJtfDU0rHErulpT7W/comments?item_id=${itemId}`);
  const results = await response.json();
  showComments(results);
  countComments(results);
};
export default fetchComments;