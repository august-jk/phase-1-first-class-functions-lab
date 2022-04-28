// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function() {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function() {

   return function(num1, num2 = 5) {return num1 * num2;}
}
const fareDoubler = function(num1) {
    return num1 * 2;
}
createFareMultiplier(num1, fareDoubler);

function fareTripler(num1) {
    return num1 * 3;
}
createFareMultiplier(num1, fareTripler);

function selectDifferentDrivers(arrayOfDrivers, fn) {
    if (fn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers();
    }
    else if (fn === returnLastTwoDrivers) {
        return returnLastTwoDrivers();
    }
}