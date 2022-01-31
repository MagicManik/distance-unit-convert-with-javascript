// function inches to feet

function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
var myInches = 132;
var result = inchToFeet(myInches);
console.log('I have', result, 'feet');


var dadiInches = 144;
var result = inchToFeet(dadiInches);
console.log('Dadi has', result, 'feet');


// function mile To kilometere

function mileToKilometere(mile) {
    var kilometere = mile * 1.60934;
    return kilometere;
}
var myMiles = 62.1371;
var result = mileToKilometere(myMiles);
console.log('I have', result, 'kilometeres');

var herMiles = 13.0488;
var result = mileToKilometere(herMiles);
console.log('She has', result, 'kilometeres')


// function mile to feets

function mileToFeets(miles) {
    var feets = 5280 * miles;
    return feets;
}
var amenaMiles = 13.0488;
var result = mileToFeets(amenaMiles);
console.log('Amena has', result, 'feets');

var manikMiles = 62.1371;
var result = mileToFeets(manikMiles);
console.log('Manik has', result, 'feets')


// function feets to mile

function feetToMile(feet) {
    var mile = feet * 0.000189394;
    return mile;
}
var amenaFeets = 68897.664;
var result = feetToMile(amenaFeets);
console.log('Amena has', result, 'miles');

var manikFeets = 328083.888;
var result = feetToMile(manikFeets);
console.log('Manik has', result, 'miles')