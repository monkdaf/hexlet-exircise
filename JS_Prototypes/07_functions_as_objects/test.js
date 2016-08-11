import assert from 'assert';
import { describe, it } from 'mocha';

import magic from './solution';

describe('Magic', () => {
  it('should work', () => {
    assert.equal(magic(), 0);
    assert.equal(magic(5, 2, -8), -1);
    assert.equal(magic(1, 2)(3, 4, 5)(6)(7, 10), 38);
    assert.equal(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2), 13);
  });
});
