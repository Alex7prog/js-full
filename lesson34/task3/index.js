// Create user form

const userFormElem = document.querySelector('.login-form');
const emailUserElem = document.querySelector('[name="email"]');
const nameUserElem = document.querySelector('[name="name"]');
const passwordUserElem = document.querySelector('[name="password"]');

const registerUserBtn = document.querySelector('.submit-button');

const baseUrl = 'https://62cde2d7066bd2b6992da5e6.mockapi.io/api/v1/login_user';

function sendUserData(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`POST: ${response.status}`);
  });
}

const onValidateInput = event => {
  if (userFormElem.reportValidity()) {
    registerUserBtn.removeAttribute('disabled');
    return;
  }

  registerUserBtn.setAttribute('disabled', true);
};

const clearFormData = () => {
  emailUserElem.value = '';
  nameUserElem.value = '';
  passwordUserElem.value = '';
};

const onFormSubmit = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(userFormElem));

  sendUserData(formData)
    .then(result => {
      alert(JSON.stringify(result));
      clearFormData();
    })
    .catch(err => {
      alert(err);
    });
};

// emailUserElem.addEventListener('input', onValidateInput);
// nameUserElem.addEventListener('input', onValidateInput);
// passwordUserElem.addEventListener('input', onValidateInput);
userFormElem.addEventListener('input', onValidateInput);

userFormElem.addEventListener('submit', onFormSubmit);
