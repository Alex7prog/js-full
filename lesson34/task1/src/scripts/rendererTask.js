import { getTasksList } from './tasksGateway.js';

const compareTasks = (a, b) => {
  return a.done - b.done || new Date(a.createDate) - new Date(b.createDate);
};

const createCheckBox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');

  const checkboxElem = createCheckBox({ done, id });

  if (done) {
    listItemElem.classList.add('list-item_done');
  }

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');

  listItemElem.dataset.id = id;
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
};

export const renderTasks = () => {
  getTasksList().then(result => {
    const tasksList = result;

    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';

    const tasksElems = tasksList.sort(compareTasks).map(createListItem);
    listElem.append(...tasksElems);
  });
};
