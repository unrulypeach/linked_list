/* eslint-disable no-undef */
import Node from './node';

const newNode = new Node();
test('can create node with null value', () => {
  expect(newNode.value).toBe(null);
});
test('next value is null on default', () => {
  expect(newNode.next).toBe(null);
});
test('can create node with specific value', () => {
  const nodeWithContent = new Node('poo');
  expect(nodeWithContent.value).toBe('poo');
});
