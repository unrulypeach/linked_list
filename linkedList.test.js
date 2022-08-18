/* eslint-disable no-undef */
import LinkedList from './linkedList';
import Node from './node';

describe('adding new Node to head', () => {
  const first = new Node('first');
  const ll = new LinkedList(first);

  test('new LL with set head', () => {
    expect(ll.head.value).toEqual('first');
  });

  test('head pointer = null', () => {
    expect(ll.head.next).toBe(null);
  });

  test.skip('new LL w/ head should set tail = head', () => {
    // ll.setTail();
    expect(ll.tail.value).toEqual('first');
  });

  test.skip('tail pointer = null', () => {
    expect(ll.tail).toBe(null);
  });
});

describe('adding 2nd node', () => {
  const first = new Node('first');
  const ll = new LinkedList(first);
  ll.append('second');

  test('2nd node = last node', () => {
    expect(ll.tail.value).toBe('second');
  });

  test('contains method', () => {
    expect(ll.contains('second')).toBeTruthy();
  });

  test('contains method', () => {
    expect(ll.contains('third')).toBeFalsy();
  });

  test('size method', () => {
    expect(ll.size()).toBe(2);
  });

  test('1st node points to 2nd node', () => {
    const second = new Node('second');
    expect(ll.head.next).toEqual(second);
  });

  test('can get parent node', () => {
    expect(ll.getParentNodeOf('second')).toEqual(first);
  });

  test('prepend', () => {
    ll.prepend('Im first');
    expect(ll.getParentNodeOf('first')).toEqual({
      value: 'Im first',
      next: { value: 'first', next: { value: 'second', next: null } },
    });
  });

  test.skip('find fn', () => {
    expect(ll.find('second')).toBe(1);
  });

  test.skip('find fn with extinct value', () => {
    expect(ll.find('fifty')).toBe(null);
  });
});

describe('lots of nodes', () => {
  const first = new Node('first');
  const ll = new LinkedList(first);
  ll.append('second');
  ll.append('third');
  ll.append('fourth');

  test('correct tail set', () => {
    expect(ll.tail.value).toEqual('fourth');
  });

  test('getParentNode', () => {
    expect(ll.getParentNodeOf('third')).toEqual({
      value: 'second',
      next: { value: 'third', next: { value: 'fourth', next: null } },
    });
  });

  test('find value', () => {
    expect(ll.find('fourth')).toEqual(3);
  });

  test('find nonexisting value', () => {
    expect(ll.find('poop')).toEqual(null);
  });

  test('at index', () => {
    expect(ll.at(2)).toEqual({
      value: 'third',
      next: { value: 'fourth', next: null },
    });
  });

  test('pop', () => {
    ll.pop();
    ll.pop();
    expect(ll.tail).toEqual({
      value: 'second',
      next: null,
    });
  });

  test('to string', () => {
    expect(ll.toString()).toEqual('(first) -> (second) -> null');
  });
});
test.skip('', () => {

});
