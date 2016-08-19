import Tree from 'hexlet-trees';

// BEGIN (write your solution here)
const getPathParts = (path) =>
  path.split('/').filter(part => part !== '');
// END

export default class {
  constructor() {
    this.tree = new Tree('/');
  }

  // BEGIN (write your solution here)
  touchSync(path) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const parent = this.tree.getDeepChild(parts.slice(0, -1));
    return parent.addChild(name, { type: 'file' });
  }

  isFile(path) {
    const parts = getPathParts(path);
    const current = this.tree.getDeepChild(parts);
    return current && current.getMeta().type === 'file';
  }

  mkdirSync(path) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const parent = this.tree.getDeepChild(parts.slice(0, -1));
    return parent.addChild(name, { type: 'dir' });
  }

  isDirectory(path) {
    const parts = getPathParts(path);
    const current = this.tree.getDeepChild(parts);
    return current && current.getMeta().type === 'dir';
  }  
  // END
}
