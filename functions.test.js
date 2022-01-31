const functions = require('./functions')

describe('sum', () => {
  test ('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1,2)).toBe(3)
  })
})

describe('areaOfCircle', () => {
  test('should find the area of a circle given a radius', () => {
    expect(functions.areaOfCircle(4)).toEqual(50.26548245743669)
    expect(functions.areaOfCircle(10)).toEqual(314.1592653589793)
    expect(functions.areaOfCircle(1)).toEqual(3.141592653589793)
  })
})

describe('celciusToFarenheit', () => {
  test('should convert degrees in celcius to farenheit', () => {
    expect(functions.celciusToFarenheit(0)).toEqual(32)
    expect(functions.celciusToFarenheit(-40)).toEqual(-40)
    expect(functions.celciusToFarenheit(100)).toEqual(212)
  })
})


