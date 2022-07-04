// set attributes

// export finishList()
// in: none
// out: none

export const finishForm = function () {
  const elemLoginForm = document.querySelector('.login-form');
  const elemInputLogin = document.createElement('input');
  const elemInputPassword = document.querySelector('[name="password"]');

  elemInputLogin.setAttribute('type', 'text');
  elemInputLogin.setAttribute('name', 'login');
  elemLoginForm.prepend(elemInputLogin);

  elemInputPassword.setAttribute('type', 'password');
};

//finishForm();
