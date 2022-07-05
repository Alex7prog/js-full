// Handler for several elem

const elemButtonsPagination = document.querySelectorAll('.pagination__page');

const handlePagBtnClick = function (event) {
  console.log(event.target.dataset.pageNumber);
};

elemButtonsPagination[0].addEventListener('click', handlePagBtnClick);
elemButtonsPagination[1].addEventListener('click', handlePagBtnClick);
elemButtonsPagination[2].addEventListener('click', handlePagBtnClick);

// option 2 (best)

// const elemButtonsPagination = document.querySelector('.pagination_page');

// const handleClick = function (event) {
//   if (event.target.classList.contains('pagination__page')) {
//     console.log(event.target.dataset.pageNumber);
//   }
// };

// elemButtonsPagination.addEventListener('click', handleClick);
