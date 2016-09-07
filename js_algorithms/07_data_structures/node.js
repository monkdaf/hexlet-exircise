class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export const make = (value, next) => new Node(value, next);

export const setNext = (node, next) => node.next = next;

export const getNext = (node) => node.next;
