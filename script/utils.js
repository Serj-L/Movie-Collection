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

function getscrollbarWidth() {
    const outer = document.createElement('div');

    outer.style.position = 'adsolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';
    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
};

function compensateScrollbarWidth() {
    if(document.body.offsetHeight > document.documentElement.clientHeight) {
        document.querySelector('.container').style.marginRight = '';
        document.querySelector('.container').style.paddingRight = '';
    } else {
        document.documentElement.clientWidth > 1440
        ? document.querySelector('.container').style.marginRight = `${getscrollbarWidth()}px`
        : document.querySelector('.container').style.paddingRight = `${getscrollbarWidth()}px`;
    }
};

export {
    getRandomNumber,
    getRandomBudget,
    getRandomDate,
    compensateScrollbarWidth
};
