class Name {
  constructor(baseContainerId) {
    this.baseContainer = document.getElementById(baseContainerId);

    if (this.baseContainer == null) {
      console.error(`settings Name: element ${baseContainerId} is not found`);
    } else {
      while (this.baseContainer.firstChild) {
        this.baseContainer.removeChild(this.baseContainer.firstChild);
      }
    }

    this.__init();
  }

  __init() {
    this.eftMenu = document.createElement('div');
    this.rightContainer = document.createElement('div');

    this.__buildLeftMenu(leftMenu);

    this.baseContainer.appendChild(leftMenu);
    this.baseContainer.appendChild(this.rightContainer);

    this.elem = new departments(this.rightContainer, this);
  }

  __buildLeftMenu(container) {
    container.innerHTML = `
          <ul class="list-group">
              <li class="list-group-item active">
                  <i class="QWERTY"></i> QWERTY
              </li>
              <li class="list-group-item control-item bg-gray-300">
                  <i class="QWERTY"></i> QWERTY
              </li>
              <li class="list-group-item control-item">
                  <i class="QWERTY"></i> QWERTY
              </li>
              <li class="list-group-item control-item">
                  <i class="QWERTY"></i> QWERTY
              </li>
              <li class="list-group-item control-item">
                  <i class="QWERTY"></i> QWERTY
              </li>
              <li class="list-group-item control-item">
                  <i class="QWERTY"></i> QWERTY
              </li>
          </ul>
      `;

    this.baseContainer.appendChild(container);

    this.getMenuElements = {
      QWERTY: document.getElementById('QWERTY'),
      QWERTY1: document.getElementById('QWERTY'),
      QWERTY2: document.getElementById('QWERTY'),
      QWERTY3: document.getElementById('QWERTY'),
      QWERTY4: document.getElementById('QWERTY'),
      QWERTY5: document.querySelectorAll('.QWERTY')
    };
  }

  __clearRightContainer() {
    if (this.rightContainer !== null && typeof this.rightContainer !== 'undefined') {
      while (this.rightContainer.firstChild) {
        this.rightContainer.removeChild(this.rightContainer.firstChild);
      }
    }
  }
}