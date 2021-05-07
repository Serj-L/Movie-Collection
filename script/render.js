import {createRandomFilmCard} from './mock.js';
import {favoritsCheckBox} from './favorits.js';

const filmsList = document.querySelector('.film-list');
const templateFilmCard = document.getElementById('card-template').content.querySelector('.card');
const filmsMockArr = new Array(4).fill(null).map(filmCard => filmCard = createRandomFilmCard());


function renderFilmsList(array) {

    while (filmsList.lastChild) {
        filmsList.removeChild(filmsList.lastChild);
    };

    array.forEach((film, index) => {
        const filmTitle = templateFilmCard.querySelector('.card-header__title');
        const filmPoster = templateFilmCard.querySelector('.card-header__image');
        const filmRating = templateFilmCard.querySelector('.film-info__rating .film-info__text');
        const filmReleaseDate = templateFilmCard.querySelector('.film-info__release-date .film-info__text');
        const filmDirector = templateFilmCard.querySelector('.film-info__director .film-info__text');
        const filmBudget = templateFilmCard.querySelector('.film-info__box-office .film-info__text');
        const filmDescription = templateFilmCard.querySelector('.film-info__plot .film-info__text');
        const toFavoritsBtn = templateFilmCard.querySelector('.card__button');

        filmTitle.innerText = film.title === null ? '-' : film.title;
        filmPoster.src = film.poster;
        filmRating.innerText = film.rating === null ? '0.0' : film.rating;
        filmReleaseDate.innerText = film.realeseDate === null ? '-' : film.realeseDate;
        filmDirector.innerText = film.director === null ? '-' : film.director;
        filmBudget.innerText = film.budget === null ? '$0' : film.budget;
        filmDescription.innerText = film.description === null ? '-' : film.description.length <= 140 ? film.description : film.description.slice(0,137) + '...';
        templateFilmCard.dataset.filmId = index;

        toFavoritsBtn.classList.toggle('button_add', !film.isFavorite);
        toFavoritsBtn.classList.toggle('button_remove', film.isFavorite);

        const currentFilmCard = templateFilmCard.cloneNode(true);

        if(film.isFavorite && favoritsCheckBox.checked) {
            filmsList.appendChild(currentFilmCard);
        }

        if(!film.isFavorite && !favoritsCheckBox.checked) {
            filmsList.appendChild(currentFilmCard);
        }
    });
};

export {
    favoritsCheckBox,
    filmsList,
    filmsMockArr,
    renderFilmsList,
};