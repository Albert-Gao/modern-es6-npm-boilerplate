/* global it, describe, beforeEach, afterEach, expect */

import People from '../src/';

describe('developer tests', () => {
  let people;

  beforeEach(() => {
    people = new People('Albert', '26')
  });

  afterEach(() => {
    people = undefined
  });

  test('getName', () => {
    expect(people.getName()).toEqual('Albert');
  });

  test('getPeople', () => {
    expect(people.getPeople()).toEqual('Albert is 26');
  });

  test('getNewObject', () => {
    const newPeople = people.getNewObject();
    expect(newPeople).not.toBe(people.people);
    expect(newPeople).toEqual(people.people);    
  });
});
