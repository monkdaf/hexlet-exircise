import { beforeEach, describe, it } from 'mocha';
import assert from 'assert';

import { mergeSort } from './solution';

describe('mergeSort', () => {
  it('should work', () => {
    assert.deepEqual([1, 2], mergeSort([2, 1]));
    assert.deepEqual([1, 2, 5, 7, 10], mergeSort([7, 2, 5, 10, 1]));
    assert.deepEqual([3, 3, 4, 7], mergeSort([3, 4, 7, 3]))
  });
});
