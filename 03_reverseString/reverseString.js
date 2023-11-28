const reverseString = function(string) {
    let result = [];
    for (let i = 1; i <= string.length; i++) {
        result.push(string.substr(string.length-i, 1));
    }
    return result.join("");
};

// Do not edit below this line
module.exports = reverseString;
