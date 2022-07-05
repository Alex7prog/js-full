// Event handle 'change' for ckeckbox

const checkboxTaskStatus = document.querySelector('.task-status');

const handleInputChange = function (event) {
  console.log(event.target.checked);
};

checkboxTaskStatus.addEventListener('change', handleInputChange);
