const createLikesApi = async (movieId) => {
    const formData = { item_id: movieId}
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eGZ62GeBh7TTirykKrEX/likes', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
    });
    await response.text();  
   
}

export default createLikesApi;