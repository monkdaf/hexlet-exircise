import assert from 'assert';

import Tree from './Tree';

describe('Tree', () => {
  let tree;

  before(() => {
    tree = new Tree('/');
    tree.addChild('var')
      .addChild('lib')
      .addChild('run');
    tree.addChild('etc');
    tree.addChild('home');
  });

  it('#hasChildren', () => {
    assert.ok(tree.hasChildren());
  });

  it('#hasChild', () => {
    assert.ok(!tree.hasChild('/'));
    assert.ok(tree.hasChild('etc'));
  });

  it('#getParent', () => {
    const subtree = tree.getChild('var');
    assert.equal(subtree && subtree.getParent(), tree);
  });

  it('#getChildren', () => {
    const dirs = tree.getChildren().map(child => child.getKey());
    assert.deepEqual(dirs, ['var', 'etc', 'home']);
  });

  it('#getChild', () => {
    const subtree = tree.getChild('var');
    assert.equal(subtree && subtree.getKey(), 'var');
  });

  it('#getChild undefined', () => {
    const subtree = tree.getChild('undefined');
    assert.equal(subtree, undefined);
  });

  it('#getDeepChild', () => {
    const subtree = tree.getDeepChild(['var', 'lib']);
    assert.equal(subtree && subtree.getKey(), 'lib');
    const parent = subtree && subtree.getParent();
    assert.equal(parent && parent.getKey(), 'var');
  });

  it('#getDeepChild undefined', () => {
    const subtree = tree.getDeepChild(['var', 'lib', 'one', 'two']);
    assert.equal(subtree, undefined);
  });

  it('#removeChild', () => {
    const subtree = tree.getChild('var');
    subtree && subtree.removeChild('lib');
    assert.ok(subtree && !subtree.hasChildren());
  });
});
