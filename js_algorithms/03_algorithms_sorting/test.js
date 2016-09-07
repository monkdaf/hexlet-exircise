import { beforeEach, describe, it } from 'mocha';
import assert from 'assert';

import { bubbleSort } from './solution';

describe('mergeSort', () => {
  it('should work', () => {
    assert.deepEqual([1, 2], bubbleSort([2, 1]));
    assert.deepEqual([1, 2, 5, 7, 10], bubbleSort([7, 2, 5, 10, 1]));
    assert.deepEqual([3, 3, 4, 7], bubbleSort([3, 4, 7, 3]))
  });
});
