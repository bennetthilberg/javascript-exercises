function convertToCelsius(input){
  return Math.round(((input-32)*5/9) * 10)/10
}

function convertToFahrenheit(input){
  return Math.round(((input*9/5)+32) * 10)/10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
