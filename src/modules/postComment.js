const postCommentsApi = async (movieItem, user, comment) => {
  const itemid = movieItem.toString();
  const formData = { item_id: `${itemid}`, username: `${user}`, comment: `${comment}` };
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MqYDJtfDU0rHErulpT7W/comments', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  await response.text();
};
export default postCommentsApi;