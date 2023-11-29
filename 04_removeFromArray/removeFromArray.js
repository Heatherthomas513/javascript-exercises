const removeFromArray = function(array, ...removeArgs) {
    for (i = 0; i < removeArgs.length; i++) {
        array = array.filter(value => {
            return value !== removeArgs[i];
        }); 
    }; return array;
};

// Do not edit below this line
module.exports = removeFromArray;
