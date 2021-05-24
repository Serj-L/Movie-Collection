import createFilmsArr from './fetch.js';
import renderFilmsList from './render.js';
import {searchInputHandler} from './search.js';
import { favoritCheckBoxHandler, filmListHandler, initialFlagIsFavorite } from './favorits.js';
import {sortingPanelHandler} from './sort.js';
import { windowOnCloseHandler, getFilmIdFromLocalStorage } from './localStorage.js';

const filmsList = document.querySelector('.film-list');
const filmsArr = createFilmsArr();

getFilmIdFromLocalStorage()
? initialFlagIsFavorite(filmsArr, getFilmIdFromLocalStorage())
: renderFilmsList(filmsArr);

windowOnCloseHandler();

searchInputHandler();

favoritCheckBoxHandler();

sortingPanelHandler();

filmListHandler();

export {
    filmsList,
    filmsArr,
};