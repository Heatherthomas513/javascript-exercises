const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
        let array = [a, b];
        array.sort();
        let fullArray = [];
        for (i = array[0]; i <= array[1]; i++) {
            fullArray.push(i);
       } let sum = 0;
       fullArray.forEach((el) => sum += el);
       return sum;
    } else {
        return 'ERROR';
    };
};

// Do not edit below this line
module.exports = sumAll;
