const spinner = document.querySelector('.spinner');
const url = 'https://fe08-films.herokuapp.com';
const filmsData = await getFilmsData(url);

async function getAccessToken(url) {
    try {
        const response = await fetch(url + '/auth', {
            method: 'POST',
        });
       const tokenData = await response.json();
       return tokenData;
    } catch (err) {
        console.log('Ошибка получения токена авторизации', err);
    };
};

async function getFilmsData(url) {
    try {
        spinner.classList.add('spinner--active');
        const accessToken = await getAccessToken(url);
        const response = await fetch(url + '/films', {
            method: 'GET',
            headers: {
                'Autorization': `Beare ${accessToken.token}`,
            },
        });
       const filmsData = await response.json();
       return filmsData.films;
    } catch (err) {
        console.log('Ошибка получения фильмов', err);
        alert('Упс, что-то пошло не так, попробуйте перезагрузить страницу');
    } finally {
        spinner.classList.remove('spinner--active');
    };
};

export default function createFilmsArr() {
    const filmsArr = [];
    filmsData.forEach (film => {
        const filmCard = {};
        if(!film.Error) {
            filmCard.title = film.Title;
            filmCard.poster = film.Poster;
            filmCard.rating = film.imdbRating;
            filmCard.realeseDate = film.Released;
            filmCard.director = film.Director;
            filmCard.budget = film.BoxOffice;
            filmCard.description = film.Plot;
            filmCard.isFavorite = false,
            filmCard.filmId = film.imdbID;

            filmsArr.push(filmCard);
        };
    });
    return filmsArr;
};
