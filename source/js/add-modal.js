var overlay = document.querySelector('.overlay');
var modalError = document.querySelector('.modal--error');
var modalAright = document.querySelector('.modal--aright');
var submitButton = document.querySelector('.contest-form__button');
var userEmail = document.querySelector("#email");
var userName = document.querySelector("#name");
var userLastName = document.querySelector("#last-name");
var userMiddleName = document.querySelector("#middle-name");
var isStorageSupport = true;
var storageEmail = "";
var storageName = "";
var storageLastName = "";

var modalErrorOpen = function () {
  modalError.classList.add('modal--show');
  overlay.classList.add('overlay--show');
  modalError.classList.add('animation');
}

var modalErrorClose = function () {
  modalError.classList.remove('modal--show');
  overlay.classList.remove('overlay--show');
  modalError.classList.remove('animation');
}

var modalArightOpen = function () {
  modalAright.classList.add('modal--show');
  overlay.classList.add('overlay--show');
  modalAright.classList.add('animation');
}

var modalArightClose = function () {
  modalAright.classList.remove('modal--show');
  overlay.classList.remove('overlay--show');
  modalAright.classList.remove('animation');
}

  try {
    storageName = localStorage.getItem("name");
    storageLastName = localStorage.getItem("last-name");
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  };

  submitButton.addEventListener('click', function (evt) {
    if (storageName) {
      userLastName.value = storageLastName;
      userName.focus();
    } else {
      userLastName.focus();
    }
    if (storageName) {
      userName.value = storageName;
      if (storageLastName) {
        userMiddleName.focus();
      } else {
        userLastName.focus();
      }
    }
    if (!userName.value || !userLastName.value || !userEmail.value) {
      evt.preventDefault();
      modalErrorOpen();
    } else {
      evt.returnValue = true;
      localStorage.setItem("last-name", userLastName.value);
      localStorage.setItem("name", userName.value);
      localStorage.setItem("email", userEmail.value);
      modalArightOpen();
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalError.classList.contains('modal--show')) {
        modalErrorClose ();
      }
      if (modalAright.classList.contains('modal--show')) {
        modalArightClose ();
      }
    }
  });

  overlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (modalError.classList.contains('modal--show')) {
      modalErrorClose ();
    }
    if (modalAright.classList.contains('modal--show')) {
      modalArightClose ();
    }
  });
