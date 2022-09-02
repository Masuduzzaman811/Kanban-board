const postCommentsApi = async (movieItem, user, comment) => {
  const formData = { item_id: `${movieItem.id}`, username: `${user}`, comment: `${comment}` };
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MqYDJtfDU0rHErulpT7W/comments', {
  method: 'POST',
  headers: {
  Accept: 'application/json',
  'Content-type': 'application/json',
  },
  body: JSON.stringify(formData),
  });
  const data = await response.text();  
  console.log(data);
 
}
export default postCommentsApi;