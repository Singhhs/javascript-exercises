const ftoc = function(number) {
  let returnValue = (number - 32) * (5/9) //Formular  [°F] = [°C] × ​9⁄5 + 32
  let rounded = Math.round(returnValue * 10) / 10 //rounded to one decimal place
  return rounded
}

const ctof = function(number) {
let returnValue = number * (9/5) + 32 // Fomular 	[°C] = ([°F] − 32) × ​5⁄9
let rounded = Math.round(returnValue * 10) / 10 //rounded to one decimal place
  return rounded
}

module.exports = {
  ftoc,
  ctof
}
