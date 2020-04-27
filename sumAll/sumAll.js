const sumAll = function(firstInt, secondInt) {
    let sum = 0
    
    if(typeof firstInt == typeof secondInt){
             if(firstInt > secondInt) {
                 let temp = secondInt;
                 secondInt = firstInt;
                 firstInt = temp;
             }
             if(firstInt < 0 || secondInt < 0) return 'ERROR';
                 for(let i = firstInt; i <= secondInt; ++i){
                     sum += i;
                 }
         } else return 'ERROR';
         
         return sum;
   
   }


module.exports = sumAll
