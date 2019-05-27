var modalError = document.querySelector('.modal--error');
var modalAright = document.querySelector('.modal--aright');
var modalErrorButton = document.querySelector('.modal__button--error');
var modalArightButton = document.querySelector('.modal__button--aright');
var submitButton = document.querySelector('.contest-form__button');
var userEmail = document.querySelector('#email');
var userName = document.querySelector('#name');
var userLastName = document.querySelector('#last-name');
var userMiddleName = document.querySelector('#middle-name');
var isStorageSupport = true;
var storageEmail = '';
var storageName = '';
var storageLastName = '';

var modalErrorOpen = function () {
  modalError.classList.add('modal--show');
  modalError.classList.add('animation');
}

var modalErrorClose = function () {
  modalError.classList.remove('modal--show');
  modalError.classList.remove('animation');
}

var modalArightOpen = function () {
  modalAright.classList.add('modal--show');
  modalAright.classList.add('animation');
}

var modalArightClose = function () {
  modalAright.classList.remove('modal--show');
  modalAright.classList.remove('animation');
}

var errorRemove = function () {
  userEmail.classList.remove('error');
  userName.classList.remove('error');
  userLastName.classList.remove('error');
}

  try {
    storageName = localStorage.getItem('name');
    storageLastName = localStorage.getItem('last-name');
    storageEmail = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  };

  submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (storageName) {
      userLastName.value = storageLastName;
      userName.focus();
    } else {
      userLastName.focus();
    }
    if (storageName) {
      userName.value = storageName;
      if (storageLastName) {
        userEmail.focus();
      } else {
        userLastName.focus();
      }
    }
    if (!userName.value || !userLastName.value || !userEmail.value) {
      modalErrorOpen();
      if (!userName.value) {
        userName.classList.add('error');
      } else {
        userName.classList.remove('error');
      }
      if (!userLastName.value) {
        userLastName.classList.add('error');
      } else {
        userLastName.classList.remove('error');
      }
      if (!userEmail.value) {
        userEmail.classList.add('error');
      } else {
        userEmail.classList.remove('error');
      }
    } else {
      localStorage.setItem('last-name', userLastName.value);
      localStorage.setItem('name', userName.value);
      localStorage.setItem('email', userEmail.value);
      errorRemove();
      modalArightOpen();
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalError.classList.contains('modal--show')) {
        modalErrorClose();
      }
      if (modalAright.classList.contains('modal--show')) {
        modalArightClose();
      }
    }
  });

  modalErrorButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalErrorClose();
  });

  modalArightButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalArightClose();
  });
