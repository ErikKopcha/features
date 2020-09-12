class Mask {
  constructor(inputId, inputMask) {
      this.inputPhone = document.getElementById(inputId); // поле с вводом
      this.defMask = inputMask; // маска для ввода
      this.init();
  }

  init() {
      this.phoneMask();
  }

  phoneMask() {
      let self = this;

      // event на нажатия клавиш в поле ввода телефона
      this.inputPhone.addEventListener('keydown', function (event) {
          if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
              event.preventDefault();
          }

          let mask = self.defMask; // Задаем маску

              if (/[0-9/+/ /]/.test(event.key)) {
                  // Здесь начинаем сравнивать this.value и mask
                  let currentString = this.value;
                  let currentLength = currentString.length;

                  if (/[0-9]/.test(event.key)) {
                      if (mask[currentLength] == '1') {
                          this.value = currentString + event.key;
                      } else {
                          for (let i = currentLength; i < mask.length; i++) {
                              if (mask[i] == '1') {
                                  this.value = currentString + event.key;
                                  break;
                              }
                              currentString += mask[i];
                          }
                      }
                  }
              }
      });
  }
}
