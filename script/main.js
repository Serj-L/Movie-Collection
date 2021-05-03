'use strict';

const filmsTitles = [
    'Зеленая миля',
    'Пеле: Рождение легенды',
    'Законопослушный гражданин',
    'Вторая жизнь Уве',
    'Бриллиантовая рука',
    'Ford против Ferrari',
    'Джентльмены удачи',
    'Константин: Повелитель тьмы',
    'Операция «Ы» и другие приключения Шурика',
    'Богемская рапсодия',
];

const filmsDescriptions = [
    'В 1935 году в отделение федеральной тюрьмы «Холодная гора» поступил афроамериканец невероятных размеров, по имени Джон. Он был приговорен посмертно за изнасилование и убийство двух девочек. Джон был очень спокоен и зная, что он не совершал данное преступление был готов пройтись по зеленой миле. Так назывался коридор зеленого цвета, по которому осужденные отправлялись в последний путь на казнь на электрическом стуле.',
    'С ранних лет Пеле мечтал получить признание и делал все возможное, чтобы достичь своей цели. Ему пришлось столкнуться со многими проблемами, но он всегда преодолевал их, тем самым закаляя свой характер. Фильм охватывает детство этого гениального спортсмена, вплоть до победы на его первом этапе Кубка мира, проходившем в Швейцарии. На этом турнире юному Пеле было всего семнадцать лет, и уже тогда он влюбил в себя миллионы поклонников футбола. Многие наслаждались его игрой и великолепными голами, даже не задумываясь, какой огромный труд проделывает этот легендарный спортсмен.',
    'Главный герой Клайд — это добропорядочный житель Филадельфии, которому пришлось пережить страшное событие в его жизни. Он потерял самое дорогое, семью, жену и дочь. Преступники не понесли достойного наказания и были отпущены, потому что так было удобно полиции и прокурору. До этого момента Клайд свято верил в закон и не нарушал его. Но теперь из законопослушного главный герой превращается в ожесточенного убийцу. Его поступками движет месть. От его страшной мести никому не спрятаться.',
    'Уве — пожилой ворчун, который постоянно достает соседей своими придирками. У него абсолютный порядок в доме и гараже, как и в мыслях, поэтому он просто ненавидит, когда кто-то нарушает устоявшиеся правила. Больше всего его раздражает семейка новоселов, в которой папаша даже гвоздя не может забить. Сам пенсионер умеет все: виртуозно припарковать машину между крыльцом и почтовым ящиком, починить текущую батарею и выбить скидку у самого несговорчивого продавца. Но никто не знает, зачем в доме этого человека имеется пистолет, крюк в потолке и целая гора снотворного. Возможно ответить на этот вопрос мог бы кот, которого несклонный к сантиментам Уве так и не смог прогнать?',
    'Скромный служащий, старший экономист «Гипрорыбы» Семен Семенович Горбунков отправляется за границу. Он едет в туристическую поездку на круизном лайнере. Прогуливаясь по восточному городу, наш герой отстал от группы и заблудился. Возвращаясь на лайнер, он случайно поскользнулся, упал и вывихнул руку. Но падая, произносит фразу: «Черт побери!», которая являлась паролем для стамбульских контрабандистов. Они накладывает Семену Семеновичу гипсовую повязку, в которую прячут драгоценности. Однако, придя в себя, Горбунков увидел сокровища и снова теряет сознание. Настоящий контрабандист Геша оказался соседом по каюте с Горбуновым. Преступники, уверенные в том, что Горбунков ничего не знает, прикладывают все усилия, чтобы вернуть драгоценности.',
    'Действия фильма происходят в середине шестидесятых годов. Кэррол Шелби — американский автомобильный конструктор, к которому обратилось руководство Форда. Они хотят создать абсолютно новый спорткар, способный конкурировать с Ferrari, одержавшими победы на протяжении нескольких лет к ряду. Кэррол уверен, что это возможно, хотя многие не верят в это. Но он убежден, что для победы в гонках мало скоростной машины. Одним из главных составляющих победы является первоклассный гонщик. Таким человеком является Кен Майлз, но уговорить его участвовать в этой авантюре будет непросто. Однако Шелби удается добиться своего и они объединяют свои силы в борьбе за победу.',
    'В Средней Азии тремя преступниками был похищен золотой шлем времен Александра Македонского. Об этом было заявлено в московскую милицию. Профессор Мальцев, глава экспедиции, случайно в автобусе сталкивается с человеком, который внешне очень похож на главного бандита – преступника по кличке «Доцент». Этот человек, оказавшись двойником Доцента, был очень добрым и хорошим человеком, участвовал в войне, а сейчас работает заведующим детским садом, талантливый педагог Евгений Иванович Трошкин. Сотрудники милиции, воспользовавшись внешним сходством, выдают Трошкина за сбежавшего из тюрьмы Доцента и внедряют его в банду для поиска украденного шлема.',
    'В Лос-Анджелесе живет борец с тьмой, медиум и экзорцист Джон Константин. Он родился с даром видения потустороннего мира, где он может видеть ангелов и демонов, которые посещают наш мир, чтобы вести борьбу за обладание человеческими душами. В юности Константин, не выдержав своего дара, совершил самоубийство, но был оживлен, после чего принял сторону сил Света и всеми силами теперь сражается с демонами, проникающими в наш мир. Жизнь Константина кажется ему бесполезной и постылой. В самый напряженный момент в его жизни появляется детектив полиции по имени Анджела, которая пытается найти виновных в смерти ее сестры-близнеца Изабель. Анджела рассказывает Константину, что ее сестра прыгнула с крыши психиатрической клиники, потому что устала постоянно видеть существ потустороннего мира.',
    'Кинофильм состоит из трех новелл: «Напарник», «Наваждение» и «Операция „Ы“», объединенных одним главным героем – неунывающим и забавным студентом политехнического института Шуриком, роль которого исполнил Александр Демьяненко. В новелле «Операция Ы» также задействованы три комических персонажа Трус, Балбес и Бывалый. В новелле «Напарнике» Шурик воюет и пытается перевоспитать хулигана и верзилу Федора, которого посадили за хулиганство на 15 суток. В новелле «Наваждении» наш герой весьма оригинальным способом пытается подготовиться к экзамену. А в «Операции «Ы» разоблачает преступный сговор знаменитой троицы с проворовавшимся директором базы Петуховым и предотвращает «ограбление века».',
    'Фильм об известной мегапопулярной рок-группе Queen и ее выдающемся вокалисте Фредди Меркьюри. Этот человек бросил вызов всем стереотипам и стал одним из самых популярных артистов в мире. Миллионы фанатов по всей планете наслаждались его творчеством. Но в фильме будет рассказано не только о головокружительном пути к успеху этого коллектива, но и о его практически распаде, поскольку образ жизни Фредди в определенный момент просто вышел из-под контроля. Также зрителю будет показана история триумфального воссоединения музыкантов накануне концерта Live Aid, в итоге ставшего одним из самых величайших выступлений в истории рок-музыки.',
];

const filmsDirectors = [
    'Фрэнк Дарабонт',
    'Джефф Цимбалист',
    'Ф. Гэри Грей',
    'Ханнес Холм',
    'Леонид Гайдай',
    'Джеймс Мэнголд',
    'Александр Серый',
    'Френсис Лоуренс',
    'А. Голованов',
    'Брайан Сингер',
];

const filmsPosters = [
    'https://ic.pics.livejournal.com/tanjand/44781189/95328435/95328435_original.jpg',
    'https://ic.pics.livejournal.com/tanjand/44781189/95328614/95328614_original.jpg',
    'https://ic.pics.livejournal.com/tanjand/44781189/95331386/95331386_original.jpg',
    'https://ic.pics.livejournal.com/tanjand/44781189/95329322/95329322_original.jpg',
    'https://ic.pics.livejournal.com/tanjand/44781189/95329169/95329169_original.jpg',
    'https://ic.pics.livejournal.com/tanjand/44781189/95328891/95328891_original.jpg',
    'https://ic.pics.livejournal.com/tanjand/44781189/95330526/95330526_original.jpg',
    'https://megaobzor.com/uploads/stories/66059/poster40933_1.jpg',
    'https://megaobzor.com/uploads/stories/66059/og6GbtSOc48.jpg',
    'https://megaobzor.com/uploads/stories/66059/poster40965_1.jpg',
];

function getRandomNumber(array = 10) {
    const minNumber = 0;
    const maxNumber = Array.isArray(array) ? array.length : array;
    const randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;
    return Array.isArray(array)
    ? Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber
    : randomNumber.toFixed(1);
};

function getRandomBudget(min = 1555461, max = 987561784) {
    const randomBudget = Math.floor(Math.random() * (max - min)) + min;
    return randomBudget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function getRandomDate(startDateStr = '1990, 1, 1', endDateStr = '2020, 11, 31') {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return `${`0${randomDate.getDate()}`.slice(-2)}-${`0${randomDate.getMonth() + 1}`.slice(-2)}-${randomDate.getFullYear()}`;
};

function createRandomFilmCard() {
    const randomFilmCard = {
        title: filmsTitles[getRandomNumber(filmsTitles)],
        poster: filmsPosters[getRandomNumber(filmsPosters)],
        rating: getRandomNumber(),
        realeseDate: getRandomDate(),
        director: filmsDirectors[getRandomNumber(filmsDirectors)],
        budget: `$${getRandomBudget()}`,
        description: filmsDescriptions[getRandomNumber(filmsDescriptions)],
        isFavorite: false,
    };
    return randomFilmCard;
};

const sortingControlPanel = document.querySelector('.sorting');
const searchInput = document.querySelector('.search__input');
const favoritsCheckBox = document.getElementById('favorite');
const sortingBtns = document.querySelectorAll('.control-panel + .sorting > button');
const templateFilmCard = document.getElementById('card-template').content.querySelector('.card');
const filmsList = document.querySelector('.film-list');
const filmsMockArr = new Array(4).fill(null).map(filmCard => filmCard = createRandomFilmCard());
let filmsSearchArr = [];
let filmsSortingkArr = [];

function renderFilmsList(array) {

    while (filmsList.lastChild) {
        filmsList.removeChild(filmsList.lastChild);
    };

    array.forEach(film => {
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
        templateFilmCard.dataset.filmId = array.indexOf(film);

        toFavoritsBtn.classList.toggle('button_add', !film.isFavorite);
        toFavoritsBtn.classList.toggle('button_remove', film.isFavorite);

        const currentFilmCard = templateFilmCard.cloneNode(true);

        if(film.isFavorite === true && favoritsCheckBox.checked) {
            filmsList.appendChild(currentFilmCard);
        }

        if(film.isFavorite === false && !favoritsCheckBox.checked) {
            filmsList.appendChild(currentFilmCard);
        }
    });
};

renderFilmsList(filmsMockArr);

function resetSorting(renderedFilmsArray) {
    sortingBtns.forEach(button => {
        button.classList.remove('button_checked');
    });
    renderFilmsList(renderedFilmsArray);
}

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

favoritsCheckBox.addEventListener('click', function(evt) {
    searchInput.value = '';
    resetSorting(filmsMockArr);
});

sortingControlPanel.addEventListener('click', function(evt) {

    if(evt.target.closest('button')) {

        filmsSortingkArr = searchInput.value.length > 0 ? filmsSearchArr : [...filmsMockArr];

        sortingBtns.forEach(button => {
            evt.target.id === button.id
            ? button.classList.add('button_checked')
            : button.classList.remove('button_checked');
        });

        switch(evt.target.id) {
            case 'rating':
                filmsSortingkArr.sort((a, b) => {
                    return  Number(b.rating) - Number(a.rating);
                });
                renderFilmsList(filmsSortingkArr);
            break;
            case 'releaseDate':
                filmsSortingkArr.sort((a, b) => {
                    return new Date(b.realeseDate.split('-').reverse().join(',')) - new Date(a.realeseDate.split('-').reverse().join(','));
                });
                renderFilmsList(filmsSortingkArr);
            break;
            case 'boxOffice':
                filmsSortingkArr.sort((a, b) => {
                    return Number(b.budget.replace(/[^\d.]+/g, '')) - Number(a.budget.replace(/[^\d.]+/g, ''));
                });
                renderFilmsList(filmsSortingkArr);
            break;
        }
    }
});

filmsList.addEventListener('click', function(evt) {

    if(evt.target.closest('button')) {
        let tragetFilmId = evt.target.parentElement.closest('div[data-film-id]').getAttribute('data-film-id');

        filmsMockArr.map((el, index) => {
            if (index === Number(tragetFilmId)) {
                favoritsCheckBox.checked ? el.isFavorite = false : el.isFavorite = true;
            }
        });

        renderFilmsList(filmsMockArr);
    }
});
