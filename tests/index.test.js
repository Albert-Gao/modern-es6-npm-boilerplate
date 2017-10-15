/* global it, describe, before, after */

import People from '../src/';

describe('developer tests', () => {
  let people;

  beforeEach(() => (people = new People('Albert', '26')));

  afterEach(() => (people = undefined));

  test('getName', () => {
    expect(people.getName()).toEqual('Albert');
  });

  test('getPeople', () => {
    expect(people.getPeople()).toEqual('Albert is 26');
  });

  test('getNewObject', () => {
    expect(people.getNewObject()).not.toBe(people.people);
    expect(people.getNewObject()).toEqual(people.people);    
  });
});
