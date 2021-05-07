import { filmsMockArr, renderFilmsList } from './render.js';
import {resetSorting} from './sort.js';

const searchInput = document.querySelector('.search__input');
let filmsSearchArr = [];

function searchInputHandler() {
    searchInput.addEventListener('input', function(evt) {

        resetSorting(filmsMockArr)

        if(evt.target.value.length > 0) {
            let searchRequest = evt.target.value.toLowerCase();
            filmsSearchArr = filmsMockArr.filter(el => el.title.toLowerCase().includes(searchRequest));
            renderFilmsList(filmsSearchArr);
        } else {
            renderFilmsList(filmsMockArr);
        }
    });
};

export {
    searchInput,
    filmsSearchArr,
    searchInputHandler
};