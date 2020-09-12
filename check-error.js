checkedError() {
  let check = false;
  this.__clearError(this.addUserErrorBox.id);

  if (this.inputSum.value == '') {
      this.__messageFromUser('Заповніть поле з сумою', 'alert-danger', this.addUserErrorBox);
      check = true;
  } else if (this.inputPoints.value == '') {
      this.__messageFromUser('Заповніть поле з балами', 'alert-danger', this.addUserErrorBox);
      check = true;
  }

  return check;
}

// повідомлення для юзера
__messageFromUser(message, typeClass, DOM) {
  this.__clearError(DOM.id);
  let div = document.createElement('div');
  div.setAttribute('role', 'alert');
  div.classList.add('alert');
  div.classList.add(typeClass);
  div.innerHTML = message;
  DOM.appendChild(div);
}

// очистити помилки
__clearError(containerId) {
  let error = document.getElementById(containerId);
  if (error !== null && typeof error !== 'undefined') {
      error.innerHTML = '';
  }
}



if (this.checkedError()) {
          return;
      }


  this.addUserErrorBox = document.createElement('div');
  this.addUserErrorBox.id = 'addCard-Error-Box';
  this.addUserErrorBox.style.marginTop = '10px';