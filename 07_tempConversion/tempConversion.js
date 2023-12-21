const convertToCelsius = function(tempF) {
  tempF = (tempF - 32) * 5/9;
  return tempF = Math.round(tempF * 10)/10;
};

const convertToFahrenheit = function(tempC) {
  tempC = (tempC * 9/5 + 32)
  return tempC = Math.round(tempC * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
