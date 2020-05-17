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
    } 
    return sum;
}

function power(number, times) {
    return Math.pow(number, times);
}

function factorial(n) {
	if (n == 0) return 1;
	let product = 1;
	for (let i = n; i > 0; i--) {
	  product *= i;
	}
	return product;
} 

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}