import { filmsMockArr, renderFilmsList } from './render.js';
import {searchInputHandler} from './search.js';
import { favoritCheckBoxHandler, filmListHandler } from './favorits.js';
import {sortingPanelHandler} from './sort.js';

renderFilmsList(filmsMockArr);

searchInputHandler();

favoritCheckBoxHandler();

sortingPanelHandler();

filmListHandler();
