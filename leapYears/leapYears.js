const leapYears = function(year) {
    const centuryYear = year % 100 == 0 && year % 400 != 0;
    const leapYear    = year % 4 == 0;
  
    if (centuryYear || !leapYear) {
      return false;
    } else {
      return true;
    }
  }
module.exports = leapYears


// Leap years are years divisible by four (like 1984 and 2004)
// years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000
// use an `if` statement and `&&` to make sure all the conditions are met properly
