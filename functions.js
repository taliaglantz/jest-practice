
// ? write a function that adds 2 numbers together.

function sum(a,b) {
  return a + b
}

// ? write a function that will calculate the area of a circle, given the radius

function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius,2)
}

function celciusToFarenheit(celcius) {
  return (celcius * (9/5)) + 32
}



module.exports = {
  sum,
  areaOfCircle,
  celciusToFarenheit
}

