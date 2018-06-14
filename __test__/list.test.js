'use strict';

const List = require('./../lib/list');

describe('A list class of tests', () => {
  let myList;

  beforeEach(() => {
    myList = new List();
    myList.push(0, 1, 2, 3, 4, 5);
  });

  afterEach(() => {
    myList = null;
  });
  
  test('Test PUSH for new items in the array', () => {
    expect(myList).toHaveLength(6);
    myList.push(6);
    expect(myList).toHaveLength(7);
    myList.push();
    expect(myList).toHaveLength(7);
    expect(myList[myList.length - 1]).toEqual(6);
    expect(myList.push(7, 8, 9)).toEqual(10);
  });

  test('Test MAP for error if list is empty', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.map(e => e);
    }).toThrow();
  });

  test('Test MAP throws err if a function is not passed in', () => {
    expect(() => {
      myList.map('not a function');
    }).toThrow();
  });

  test('MAP: should return a new list', () => {
    const newList = myList.map((num) => {
      return num * 2;
    });
    expect(newList.length).toHaveLength(myList.length);
    for (let i = 0; i < newList.length; i++) {
      expect(newList[i] / 2).toEqual(myList[i]);
    }
  });
  
  test('REDUCE: should reduce the elements in the list to one single multiplied product with NO accumulator passed in', () => {
    const product = myList.reduce((accumulator, current) => {
      return accumulator * current; 
    });
    expect(product).toEqual(0);
  });
  
  test('REDUCE: should reduce the elements in the list to one single value while adding 10 accumulatively', () => {
    const sum = myList.reduce((accumulator, current) => {
      return accumulator + current;
    }, 10);
    expect(sum).toEqual(25);
  });

  test('FOREACH: throws an error if the function is empty', () => {
    expect(() => {
      myList.forEach('not a function');
    }).toThrow();
  });

  test('FILTER will get an error if the function is empty', () => {
    expect(() => {
      myList.filter('not a function');
    }).toThrow();
  });

  test('FILTER: throws error if a function is not passed in', () => {
    expect(() => {
      myList.filter('this is not a function');
    }).toThrow();
  });
});

