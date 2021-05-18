import createRandomFilmCard from './mock.js';
import renderFilmsList from './render.js';
import {searchInputHandler} from './search.js';
import { favoritCheckBoxHandler, filmListHandler, initialFlagIsFavorite } from './favorits.js';
import {sortingPanelHandler} from './sort.js';
import { windowOnCloseHandler, getFilmIdFromLocalStorage } from './localStorage.js';

const filmsList = document.querySelector('.film-list');
const filmsMockArr = new Array(4).fill(null).map(filmCard => filmCard = createRandomFilmCard());

getFilmIdFromLocalStorage()
? initialFlagIsFavorite(filmsMockArr, getFilmIdFromLocalStorage())
: renderFilmsList(filmsMockArr);

windowOnCloseHandler();

searchInputHandler();

favoritCheckBoxHandler();

sortingPanelHandler();

filmListHandler();

export {
    filmsList,
    filmsMockArr,
};