// Dom classes

// export manageClasses()
// in: none
// out: none

export const manageClasses = function () {
  const elemListItemOne = document.querySelector('.one');
  elemListItemOne.classList.add('selected');

  const elemListItemTwo = document.querySelector('.two');
  elemListItemTwo.classList.remove('selected');

  const elemListItemThree = document.querySelector('.three');
  elemListItemThree.classList.toggle('three_done');

  const elemListItemFour = document.querySelector('.four');
  if (elemListItemFour.classList.contains('some-class')) {
    elemListItemFour.classList.add('another-class');
  }
};

// manageClasses();
