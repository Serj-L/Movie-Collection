import { filmsList, filmsMockArr } from './main.js';
import {compensateScrollbarWidth} from './utils.js';
import renderFilmsList from './render.js';
import { getSearchLength, resetSearching, filmsSearchArr } from './search.js';
import { getSortingStatus, resetSorting, filmsSortingArr } from './sort.js';

const favoritsCheckBox = document.getElementById('favorite');
let tragetFilmId;

function getFavoritsStatus() {
    return favoritsCheckBox.checked;
}

function favoritCheckBoxHandler() {
    favoritsCheckBox.addEventListener('click', function(evt) {
        resetSearching();
        resetSorting(filmsMockArr);

        compensateScrollbarWidth();
    });
};

function changeFlagIsFavorite(renderedFilmsArray) {
    renderedFilmsArray.map((el, index) => {
        if (index === Number(tragetFilmId)) {
            el.isFavorite = !getFavoritsStatus();
        }
    });
    renderFilmsList(renderedFilmsArray);
};

function filmListHandler() {

    filmsList.addEventListener('click', function(evt) {

        if(evt.target.closest('button')) {
            tragetFilmId = evt.target.parentElement.closest('div[data-film-id]').dataset.filmId;

            if (getSortingStatus()) {
                changeFlagIsFavorite(filmsSortingArr);
            } else if (getSearchLength() > 0 && !getSortingStatus()) {
                changeFlagIsFavorite(filmsSearchArr);
            } else {
                changeFlagIsFavorite(filmsMockArr);
            }

            if(!filmsList.hasChildNodes()) {
                compensateScrollbarWidth();
            }
        }
    });
};

export {
    getFavoritsStatus,
    favoritCheckBoxHandler,
    filmListHandler
};