var monthsToShow, primary, accent, mode;
var cal;
const d = new Date();
var year = d.getFullYear();
var month = d.getMonth() - 1;
const calendar = document.getElementsByClassName("calendar")[0];
const calContainer = document.getElementsByClassName("cal__container")[0];
let startInput = document.getElementById("start");
let endInput = document.getElementById("end");
const inputContainer = document.getElementsByClassName('inputs')[0];
const clearContainer = document.getElementsByClassName('clear__btn')[0];
var dateRange = [];
var style = false;
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decemeber"
];

const disabledDays = [
  "23/03/2020"
];

Pikka = {
  date: function(options){
    style = options.style;
    monthsToShow = options.monthsToRender;
    accent = options.accentColor;
    primary = options.primaryColor;
    mode = options.mode;
  }
};

// options for setting up the calendar
Pikka.date({
  format: "dd/mm/yyyy",
  style: "circles", // squares or circles
  primaryColor: "#FF5A5F",
  accentColor: "#f99092",
  monthsToRender: 4, // how many months to render in multiple mode
  disabledDatesFormat: "en-GB",
  userDatesFormat: "en-GB",
  mode: "single" // single or multiple
});

document.addEventListener("DOMContentLoaded", function() {
  if(mode == "single") {
    document.getElementsByClassName('mobile')[0].classList.add('single');
    monthsToShow = 1;
  } else {
    monthsToShow = 4;
  }
  for (let i = 1; i <= monthsToShow; i++) {
    month = month + 1;
    if (month == 12) {
      month = 0;
      year = year + 1;
    }
    buildCal();
  }
  if(mode == "multiple") {
    addMoreMonths(); 
  }
});

// function to destroy the calendar element
function clearCal() {
  let calCont = document.getElementsByClassName('cal__container')[0];
  calCont.innerHTML = "";
}

function nextMonth() {
  clearCal();
  month = month + 1;
  if (month > 11) {
      month = 0;
      year = year + 1;
  }
  buildCal();
  colourDates();
}

function prevMonth() {
  clearCal();
  if (month == 0) {
      month = 11;
      year = year - 1;
  } else {
   month = month - 1; 
  }
  buildCal();
  colourDates();
}

// Logic for calendar
function buildCal() {
  let monthControls = document.createElement("div");
  monthControls.classList.add('month__controls');
  let newMonth = document.createElement("div");
  let monthTitle = document.createElement("span");
  let monthText = document.createTextNode(months[month] + " " + year);
  let rArrow,lArrow;
  newMonth.appendChild(monthControls);
  
  //single mode needs next/prev month controls
  if(mode == "single") {
    rArrow = document.createElement('div');
    lArrow = document.createElement('div');
    lArrow.innerHTML = '<i class="fas fa-arrow-left"></i>';
    lArrow.classList.add('lArrow');
    rArrow.innerHTML = '<i class="fas fa-arrow-right"></i>';
    rArrow.classList.add('rArrow');
    rArrow.addEventListener('click', nextMonth);
    lArrow.addEventListener('click', prevMonth);
  }
  monthTitle.appendChild(monthText);
  newMonth.classList.add("month");
  
  // create the table in the DOM
  cal = createTable();
  const daysOfWeek = ["m", "t", "w", "t", "f", "s", "s"];
  let header = cal.createTHead();
  for (let i = 0; i < daysOfWeek.length; i++) {
    th = document.createElement("th");
    th.innerHTML = daysOfWeek[i];
    header.appendChild(th);
  }
  
  // this adds a day onto February every leap year (every 4 years)
  let daysInMonth = new Date(2019, parseInt(month) + 1, 0).getDate();
  if(month == 1 && year % 4 == 0) {
   daysInMonth = daysInMonth + 1;
  }
  
  // define a start day, then loop through the month
  let startDay = new Date(year, month, 1).getDay();
  let weekIndex = cal.getElementsByTagName("tr").length;
  let day = startDay == 0 ? 7 : startDay;
  var row = cal.insertRow(weekIndex);

  // creates the blanks at the start of the month
  for (let ed = 1; ed < day; ed++) {
    row.insertCell(-1);
  }

  // loops through the days adding cells and creating new rows
  for (let dim = 1; dim <= daysInMonth; dim++) {
    let cell = row.insertCell(-1);
    let gbFormat = new Intl.DateTimeFormat("en-GB").format(new Date(year, month, dim));
    cell.setAttribute("data-date-intl", new Date(year, month, dim));
    cell.setAttribute("data-date", gbFormat);
    
    if(disabledDays.includes(gbFormat)) {
       cell.classList.add('disabled');
    }
    
    cell.innerHTML = '<span>'+dim+'</span>';
    day++;
    if (day == 8) {
      weekIndex++;
      row = cal.insertRow(weekIndex);
      day = 1;
    }
  }
  let monthTitleCont = document.createElement("div");
  monthTitleCont.appendChild(monthTitle);
  if(mode == "single") {
    monthControls.appendChild(lArrow);
    monthControls.appendChild(monthTitleCont);
    monthControls.appendChild(rArrow);
  } else {
    monthControls.appendChild(monthTitleCont); 
  }
  newMonth.appendChild(cal);
  calContainer.appendChild(newMonth);
  if (month == new Date().getMonth() && year == new Date().getFullYear()) {
    highlightToday();
  }
  
  // function to add event listeners to each table cell
  initCells(cal);
}

// function to create and append more months to the calendar
function addMoreMonths() {
  let moreMonths = document.createElement("div");
  moreMonths.classList.add("more__months");
  moreMonths.innerHTML = "+";
  moreMonths.addEventListener("click", function() {
    for (let i = 1; i <= 3; i++) {
      month = month + 1;
      if (month == 12) {
        month = 0;
        year = year + 1;
      }
      buildCal();
    }
    let moreMonthsCurrent = document.getElementsByClassName("more__months")[0];
    moreMonthsCurrent.remove();
    calContainer.appendChild(moreMonths);
  });
  calContainer.appendChild(moreMonths);
}

/* function to build a table */
function createTable() {
  let table = document.createElement("table");
  let thead = table.createTHead();
  let tbody = table.createTBody();
  table.classList.add(style);
  return table;
}

var startDateSelected, endDaySelected = false;
var startDay, endDay, cells, rangeSelected;

function initCells(newMonth) {
  cells = newMonth.querySelectorAll("[data-date]");
  // loop through all cells adding event listeners
  cells.forEach(function(item, idx) {
    item.addEventListener("click", function() {
      /* 
      if the start date hasn't been selected
      get the start date, set it and highlight it 
      */
      if (!startDateSelected || typeof startDateSelected == "undefined") {
        clearRange();
        endInput.value = "";
        startDay = item.getAttribute("data-date");
        item.classList.add('selected__startEnd');
        dateRange.push(startDay);
        rangeStart = startDay;
        startInput.value = startDay;
        endDay = false;
        startDateSelected = true;
        rangeSelected = false;
      } else {
        // when the user clicks the end date, set the date and highlight
        endDay = this.getAttribute("data-date");
        let selected = false;
        /* 
        loop through the days between the start and end day
        highlight each cell until you reach the end date
        processDate turns the en-GB date format back to standard format to compare 
        */
        if (processDate(endDay) > processDate(startDay)) {
          rangeEnd = endDay;
          endInput.value = endDay;
          item.classList.add('selected__startEnd');
          while (selected == false) {
            if (startDay !== endDay) {
              var dateParts = startDay.split("/");
              let tomorrow = new Date(
                dateParts[2],
                dateParts[1] - 1,
                parseInt(dateParts[0]) + 1
              );
              let tempDate = new Intl.DateTimeFormat("en-GB").format(tomorrow);
              startDay = tempDate;
              rangeSelected = true;
            } else {
              selected = true; 
              logDateArray();
            }
          }
          startDateSelected = false;
        } else {
          /* 
          if the user selects an earlier start date:
          clear the range
          set the new start date
          colour the new start date 
          */
          clearRange();
          startDay = item.getAttribute("data-date");
          startInput.value = startDay;
          item.classList.add('selected__startEnd');
          endDay = false;
          startDateSelected = true;
          rangeSelected = false;
        }
      }
    });
  });
}

/*
This function saves the selected dates into an array
The saved array is used to render the selected dates
if the month changes.
*/
function logDateArray() {
  dateRange = [];
  let start = startInput.value;
  let end = endInput.value;
  let tempDate = start;
  while(tempDate !== endInput.value) {
    var dateParts = tempDate.split("/");
    let tomorrow = new Date(
      dateParts[2],
      dateParts[1] - 1,
      parseInt(dateParts[0]) + 1
    );
    tempDate = new Intl.DateTimeFormat("en-GB").format(tomorrow);
    dateRange.push(tempDate);
  }
  dateRange.unshift(start);
  colourDates();
}

/*
Function to loop through the saved array and colour the dates
*/
function colourDates() {
  dateRange.forEach(function(itm, idx) {
    let classToAdd = idx == 0 || idx == dateRange.length - 1 ? 'selected__startEnd' : 'selected';
    let cell = document.querySelectorAll('[data-date="'+itm+'"]')[0];
    if(typeof cell != "undefined") {
      cell.classList.add(classToAdd);
    }
  });
}

/*
Process date turns en-GB date format back to a standard date object
*/
function processDate(date) {
  var parts = date.split("/");
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

/* 
this function deletes all the <tr> elements
then rebuilds the table header
*/
function deletePrevMonth() {
  const cal = document.getElementById("cal");
  cal.innerHTML = "";
}

/* 
function highlights the current day we're on
only if we're on the right month
*/
function highlightToday() {
  let today = new Date();
  let todayCell = document.querySelector(
    'td[data-date="' + new Intl.DateTimeFormat("en-GB").format(today) + '"]'
  );
  todayCell.style.backgroundColor = "#ededed";
}

/* function to clear the selected dates */
function clearRange() {
  let selected = document.querySelectorAll('.selected,.selected__startEnd');
  for(let item of selected) {
    item.classList = "";
  }
  dateRange = [];
}
