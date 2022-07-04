// create DOM elements and append to page part 2

// export finishList()
// in: none
// out: none, ul > li add

export const finishList = function () {
  const elemList = document.querySelector('.list');
  const elemListItems = elemList.querySelectorAll('li');
  let elemListItem = document.createElement('li');

  elemListItem.innerText = '1';
  elemList.prepend(elemListItem);

  elemListItem = document.createElement('li');
  elemListItem.innerText = '4';
  elemListItems[2].before(elemListItem);

  elemListItem = document.createElement('li');
  elemListItem.innerText = '6';
  elemListItems[2].after(elemListItem);

  elemListItem = document.createElement('li');
  elemListItem.innerText = '8';
  elemList.append(elemListItem);
};

finishList();

//  console.log(document.querySelector('.list'));
