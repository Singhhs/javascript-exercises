    const removeFromArray = function(firstArray, ...toRemove) { //... the three dots is a 'Rest parameters'
        let modifiedArray = firstArray.slice(); //returns a shallow copy of a portion of an array into a new array object
        ;
    
        for (i = 0; i < firstArray.length; i++) {
            if (modifiedArray.includes(toRemove[i])) { //The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
                modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1)
            }    
        }
        return modifiedArray;
    }
module.exports = removeFromArray