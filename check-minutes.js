var start = '12.04.2018 15:00'; 
var finish = '12.04.2018 15:15';

function calcMinutes(start, finish) {
  return ((new Date(finish)).getTime() - (new Date(start)).getTime())/60000;
}

var minutes = calcMinutes(start, finish);
console.log(minutes);