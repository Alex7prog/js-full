// Todo List - create/update task

// Algo:
// start script or user action => change tasks => render todo list (<.list>)
// change tasks:
// add tasks id attribute;
// set tasks -  {task.done = false/true}, {new task} => [tasks]
// click btnCreate => input !== '' => add new task
// render todo list:
// create <li> according tasks and tasks {text, done, id}
// set - checkbox.checked, checkbox.dataset.id to according tasks.id

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const TodoElem = document.querySelector('.todo-list');
const listElem = document.querySelector('.list');

const inputTaskElem = document.querySelector('.task-input');
const btnCreateTaskElem = document.querySelector('.create-task-btn');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.dataset.id = id;
      checkboxElem.classList.add('list__item-checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};

const tasksAddId = function () {
  tasks.map((taskObj, id) => (taskObj.id = id));
};

tasksAddId();
renderTasks(tasks);

const handlerTodoElem = function (event) {
  const target = event.target;

  if (target.classList.contains('list__item-checkbox')) {
    tasks.find(el => String(el.id) === String(target.dataset.id)).done = target.checked;
    renderTasks(tasks);
  }

  if (target.classList.contains('create-task-btn')) {
    if (inputTaskElem.value.length) {
      tasks.push({ text: inputTaskElem.value, done: false });
      inputTaskElem.value = '';
      tasksAddId();
      renderTasks(tasks);
    }
  }
};

TodoElem.addEventListener('click', handlerTodoElem);

// due to the condition of the task, delegation is not fully
// added unnecessary handlerbtnCreateTaskElem

btnCreateTaskElem.addEventListener('click', handlerTodoElem);
