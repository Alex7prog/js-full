import { getItem, setItem } from './storage.js';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
  return a.done - b.done || new Date(a.createDate) - new Date(b.createDate);
};

const createCheckBox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.dataset.id = id;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  const checkboxElem = createCheckBox({ done, id });

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];

  listElem.innerHTML = '';

  const tasksElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};
