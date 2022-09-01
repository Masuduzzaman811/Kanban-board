import './styles/style.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons/faThumbsUp';
import movieList from './modules/movie-list.js';

library.add(faMessage);
library.add(faThumbsUp);

dom.watch();
 

movieList();



