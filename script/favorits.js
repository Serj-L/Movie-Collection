import {compensateScrollbarWidth} from './utils.js';
import { filmsList, filmsMockArr, renderFilmsList } from './render.js';
import { searchInput, filmsSearchArr } from './search.js';
import { sortingControlPanel, resetSorting, filmsSortingArr } from './sort.js';

const favoritsCheckBox = document.getElementById('favorite');
let tragetFilmId;

function favoritCheckBoxHandler() {
    favoritsCheckBox.addEventListener('click', function(evt) {
        searchInput.value = '';
        resetSorting(filmsMockArr);

        compensateScrollbarWidth();
    });
};

function changeFlagIsFavorite(renderedFilmsArray) {
    renderedFilmsArray.map((el, index) => {
        if (index === Number(tragetFilmId)) {
            el.isFavorite = !favoritsCheckBox.checked;
        }
    });
    renderFilmsList(renderedFilmsArray);
};

function filmListHandler() {

    filmsList.addEventListener('click', function(evt) {

        if(evt.target.closest('button')) {
            tragetFilmId = evt.target.parentElement.closest('div[data-film-id]').dataset.filmId;

            if (sortingControlPanel.classList.contains('active')) {
                changeFlagIsFavorite(filmsSortingArr);
            } else if (searchInput.value.length > 0 && !sortingControlPanel.classList.contains('active')) {
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
    favoritsCheckBox,
    favoritCheckBoxHandler,
    filmListHandler
};