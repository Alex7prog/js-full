// create DOM elements and append to page part 2

// export finishList()
// in: none
// out: none, ul > li add

export const finishList = function () {
  const elemList = document.querySelector('.list');
  const elemListItemSpecial = document.querySelector('.special');

  elemList.prepend(document.createElement('li'));
  elemList.firstElementChild.innerText = '1';

  elemListItemSpecial.before(document.createElement('li'));
  elemListItemSpecial.previousElementSibling.innerText = '4';
  elemListItemSpecial.after(document.createElement('li'));
  elemListItemSpecial.nextElementSibling.innerText = '6';

  elemList.append(document.createElement('li'));
  elemList.lastElementChild.innerText = '8';
};

// finishList();

//  console.log(document.querySelector('.list'));

// elemList.prepend(document.createElement('li'));
// elemList.children[0].innerText = '1';

// elemList.children[3].before(document.createElement('li'));
// elemList.children[3].innerText = '4';

// elemList.children[4].after(document.createElement('li'));
// elemList.children[5].innerText = '6';

// elemList.append(document.createElement('li'));
// elemList.children[7].innerText = '8';
