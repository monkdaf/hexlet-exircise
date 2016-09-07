import { make, setNext } from './node';
import { isCircular } from './solution';

import { beforeEach, describe, it } from 'mocha';
import assert from 'assert';

describe('isCircular', () => {
  it('Is Not Circular 1', () => {
    const head = make(1, make(8, make(5)));
    assert.equal(false, isCircular(head));
  });


  it('Is Circular 1', () => {
    const node1 = make(8);
    const node2 = make(6, make(7,  node1));
    setNext(node1, node2);
    assert.equal(true, isCircular(node2));
  });

  it('Is Circular 2', () => {
    const node1 = make(6, make(7, make(8)));
    const node2 = make(1, make(2, make(4)));
    setNext(node1, node2);
    setNext(node2, node1);
    assert.equal(true, isCircular(node2));
  });

  it('Is Circular 3', () => {
    const last = make(8);
    const dead = make(2, last);
    const head = make(1, dead);
    setNext(last, dead);
    assert.equal(true, isCircular(head));
  });
});
