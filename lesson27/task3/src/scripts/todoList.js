import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';

export const initTodoListHandlers = () => {
  const btnCreateTaskElem = document.querySelector('.create-task-btn');
  btnCreateTaskElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.todo-list');
  todoListElem.addEventListener('click', onToggleTask);
};
