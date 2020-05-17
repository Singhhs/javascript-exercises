function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function sum (array) {
	return array.reduce((total, current) => total + current, 0);
}

function multiply (array) {
	var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
}    return sum;


function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}