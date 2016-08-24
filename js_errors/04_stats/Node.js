import Stats from './Stats';

// BEGIN (write your solution here)
import Tree from 'hexlet-trees';

class Node {
  constructor(path, type) {
    this.tree = new Tree(path, type);
  }

  getStats() {
    return new Stats(this.tree.getMeta().type);
  }
}

export default Node;
// END
