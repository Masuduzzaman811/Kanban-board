import './styles/style.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons/faThumbsUp';
import movieList from './modules/movie-list.js';
import commentModal from './modules/modal.js';

library.add(faMessage);
library.add(faThumbsUp);

dom.watch();
movieList();
commentModal();

const modal = document.getElementById('modal');
const btn = document.getElementById('modal-open');
const close = document.querySelector('.close');

btn.onclick = () => {
  modal.style.display = 'block';
};

close.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};