
const likeMovie = (movies) => {
    const likeButton = document.querySelectorAll('.likes-count');
    likeButton.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e.target.id);

            saveLike();
        })
 
    });
}

export default likeMovie;