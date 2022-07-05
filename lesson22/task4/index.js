// Handle event for checkbox

const checkboxTaskStatus = document.querySelector('.task-status');

const inputTextHandler = () => {
  console.log(checkboxTaskStatus.checked);
  console.log(checkboxTaskStatus.value);
};

checkboxTaskStatus.addEventListener('change', inputTextHandler);
