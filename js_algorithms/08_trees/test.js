import { findIndex } from './solution';

import { beforeEach, describe, it } from 'mocha';
import assert from 'assert';

describe('findIndex', () => {
    it('empty tree', () => {
        assert.equal(undefined, findIndex([], 13));
    });
    it('tree', () => {
        const tree = [13, 10, 28, 6, 11, 21, 33];

        assert.equal(undefined, findIndex(tree, 100));
        assert.equal(0, findIndex(tree, 13));
        assert.equal(2, findIndex(tree, 28));
        assert.equal(6, findIndex(tree, 33));
    });
});
