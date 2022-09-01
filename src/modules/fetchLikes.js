const fetchLikes = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MqYDJtfDU0rHErulpT7W/likes/');
   const result = await response.json();
   console.log(result);
}
fetchLikes();
export default fetchLikes;