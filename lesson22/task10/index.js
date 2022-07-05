// Handler for several elem

const elemButtonsPagination = document.querySelector('.pagination');

const handlePagBtnClick = function (event) {
  if (event.target.classList.contains('pagination__page')) {
    console.log(event.target.dataset.pageNumber);
  }
};

elemButtonsPagination.addEventListener('click', handlePagBtnClick);
