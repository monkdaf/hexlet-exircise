import assert from 'assert';
import feedCount from './solution';

describe('feedCount', () => {
  it('should work', () => {
    assert.equal(1, feedCount(1));
    assert.equal(1, feedCount(2));
    assert.equal(2, feedCount(3));
    assert.equal(3, feedCount(5));
    assert.equal(6, feedCount(10));
    assert.equal(28, feedCount(100));
  });
});
