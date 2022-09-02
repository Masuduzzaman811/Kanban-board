import './styles/style.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons/faThumbsUp';
import fecthMovieList from './modules/fetchMovieList.js';
import fetchLikes from './modules/fetchLikes.js';


//fetchLikes();

library.add(faMessage);
library.add(faThumbsUp);

dom.watch();
 
fecthMovieList();

const togglePages = () => {
    const navItems = document.querySelectorAll('.nav-item');
const movieListContainer = document.querySelectorAll('.movie-list-container')

const comedyId = document.getElementById('comendycount');

navItems.forEach(nav => {
    nav.addEventListener('click',(e) => {
        e.preventDefault();
        const navId = e.target.className;
        movieListContainer.forEach((moviesection) => {
            moviesection.classList.remove('active');
            if(moviesection.id === navId){
                moviesection.classList.add('active')
            }

        })
      
    });
    
});  

}
togglePages();

