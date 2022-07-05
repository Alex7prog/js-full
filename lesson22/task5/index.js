// search input

const inputSearch = document.querySelector('.search__input');
const btnSearch = document.querySelector('.search__btn');

const inputSearchHandler = () => {
  console.log(inputSearch.value);
};

btnSearch.addEventListener('click', inputSearchHandler);
