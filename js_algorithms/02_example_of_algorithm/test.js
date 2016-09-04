import { beforeEach, describe, it } from 'mocha';
import assert from 'assert';

import { multi } from './solution';

describe('multi', () => {
    it('regular', () => {
        assert.equal(9, multi(3, 3));
        assert.equal(20, multi(4, 5));
    });
    it('multiply by one', () => {
        assert.equal(3, multi(3, 1));
        assert.equal(7, multi(1, 7));
    });
    it('multiply by zero', () => {
        assert.equal(0, multi(5, 0));
    });
});
