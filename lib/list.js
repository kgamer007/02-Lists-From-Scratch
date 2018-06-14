'use strict';

const List = module.exports = class {
  constructor() {
    this.length = 0;
  }

  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
      this.length += 1;
    }
    return this.length;
  }

  map(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a funtion');
    }

    if (!this.length) {
      throw new Error('List is empty.');
    }
    const result = new List();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i));
    }
    return result;
  }

  reduce(callback, acc) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    if (!this.length) {
      return new Error('List empty');
    }
    if (!acc) {
      acc = this[0]; //eslint-disable-line
    }
    for (let i = 0; i < this.length; i++) {
      acc = callback(acc, this[i], i); //eslint-disable-line
    }
    return acc;
  }

  filter(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    const returnList = new List();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.list[i], i, this.last)) returnList.push(this.list[i]);
    }
    return returnList;
  }

  forEach(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    for (let i = 0; i < this.length; i++) {
      callback(this.list[i], i, this.list);
    }
    return undefined;
  }
};
