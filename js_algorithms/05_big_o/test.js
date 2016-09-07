import { beforeEach, describe, it } from 'mocha';
import assert from 'assert';

import { merge } from './solution';

describe('merge', () => {
    it('one array is empty', () => {
        assert.deepEqual([1, 2], merge([1, 2], []));
        assert.deepEqual([1, 2], merge([], [1, 2]));
    });
    it('should work', () => {
        assert.deepEqual([1, 2, 3, 3, 4, 5], merge([3, 4, 5], [1, 2, 3]));
        assert.deepEqual([1, 5, 5, 6, 10, 15, 100], merge([1, 5, 10], [5, 6, 15, 100]));
        assert.deepEqual([-3, 0, 5, 5, 11, 15, 99], merge([0, 5, 11, 99], [-3, 5, 15]));
    });
});
