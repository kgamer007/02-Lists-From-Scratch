'use strict';

const List = require('./../lib/list');

describe('A list class of tests', () => {
  let oneList;

  beforeEach(() => {
    oneList = new List();
    oneList.push(0, 1, 2, 3, 4, 5);
  });

  afterEach(() => {
    oneList = null;
  });
  
  test('Test PUSH for new items in the array', () => {
    expect(oneList).toHaveLength(6);
    oneList.push(6);
    expect(oneList).toHaveLength(7);
    oneList.push();
    expect(oneList).toHaveLength(7);
    expect(oneList[oneList.length - 1]).toEqual(6);
    expect(oneList.push(7, 8, 9)).toEqual(10);
  });

  test('Test MAP for error if list is empty', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.map(e => e);
    }).toThrow();
  });

  test('Test MAP for thrown err if a function ')
});
