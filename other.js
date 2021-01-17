// input next \ prev focus

document.querySelector('.auth-grid').onkeyup = function (e) {
  var target = e.srcElement || e.target;
  var maxLength = parseInt(target.attributes["maxlength"].value, 10);
  var myLength = target.value.length;
  if (myLength >= maxLength) {
      var next = target;
      while (next = next.nextElementSibling) {
          if (next == null)
              break;
          if (next.tagName.toLowerCase() === "input") {
              next.focus();
              break;
          }
      }
  }
  // Move to previous field if empty (user pressed backspace)
  else if (myLength === 0) {
      var previous = target;
      while (previous = previous.previousElementSibling) {
          if (previous == null)
              break;
          if (previous.tagName.toLowerCase() === "input") {
              previous.focus();
              break;
          }
      }
  }
}

this.today = new Date();
let dd = this.today.getDate();
let mm = this.today.getMonth() + 1;
let yyyy = this.today.getFullYear() - 18;

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

this.today = yyyy + '-' + mm + '-' + dd;


sortSelect(selectId) {
  var sel = document.getElementById(selectId);
  var arr = Array.from(sel.children).sort((x, y) => {
      return x.text.localeCompare(y.text);
  });

  arr.forEach(x => sel.appendChild(x));
  //sel.selectedIndex = 0;
}

// отримати параметр із силки
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) == variable) {
          return decodeURIComponent(pair[1]);
      }
  }
  return '';
}

getQueryVariable('qwerty')
