import createRandomFilmCard from './mock.js';
import renderFilmsList from './render.js';
import {searchInputHandler} from './search.js';
import { favoritCheckBoxHandler, filmListHandler } from './favorits.js';
import {sortingPanelHandler} from './sort.js';

const filmsList = document.querySelector('.film-list');
const filmsMockArr = new Array(4).fill(null).map(filmCard => filmCard = createRandomFilmCard());

renderFilmsList(filmsMockArr);

searchInputHandler();

favoritCheckBoxHandler();

sortingPanelHandler();

filmListHandler();

export {
    filmsList,
    filmsMockArr
};