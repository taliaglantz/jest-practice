# HOW TO CREATE JEST TESTING ENVIRONMENT

1. yarn init
2. yarn 
3. yarn add --dev jest
4. create sum.js file and add function e.g.

```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

5. create sum.test.js file and add test e.g. 
```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
6. add following to package.json
```
{
  "scripts": {
    "test": "jest"
  }
}
```

7. run yarn test

## MATCHERS

- toBe tests exact quality
- toEqual tests value of object - "recursively checks every field of an object or array."
```
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```

## TRUTHINESS

- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opposite of toBeUndefined
- toBeTruthy matches anything that an if statement treats as true
- toBeFalsy matches anything that an if statement treats as false

```
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
```
```
test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```

## NUMBERS

- toBeGreaterThan
- toBeGreaterThanOrEqual
- toBeLessThan
- toBeLessThanOrEqual

- toBe and toEqual are equivalent for numbers
```
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

// toBe and toEqual are equivalent for numbers

  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```
- use toBeCloseTo rather than toEqual to avoid error simply becuase of rounding issue
```
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
```

## STRINGS

- check strings against regular expressions using toMatch
```
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
```
```
test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

## ARRAYS

- check if contains an item using toContain
```
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];
```
test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```


- to test if function throws an error - use toThrow
```
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}
```
```
test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
```

## CALLBACKS
//? Have to use done argument so it waits until this callback is called before finishing the test
//? Have to put everything in try catch block so can see what error is, if not won't see error if expect fails

Don't do this!
```
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});
```
Do this!!
```
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
```