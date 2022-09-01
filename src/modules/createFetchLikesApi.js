const createFetchLikesApi = async (movieId) => {
    const formData = { item_id: movieId}
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MqYDJtfDU0rHErulpT7W/likes', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
    });
    await response.text();  
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MqYDJtfDU0rHErulpT7W/likes/');
   const result = await res.json();
   console.log(result);
}

export default createFetchLikesApi;