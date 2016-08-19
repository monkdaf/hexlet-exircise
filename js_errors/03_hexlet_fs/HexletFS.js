import Tree from 'hexlet-trees';

// BEGIN (write your solution here)
const normalizePath = strPath => strPath.split('/').filter((elem) => elem !== '');
// END

export default class {
  constructor() {
    this.tree = new Tree('/');
  }

  // BEGIN (write your solution here)
  isDirectory(path) {
    const child =this.tree.getDeepChild(normalizePath(path));
    return child === undefined ? false : child.getMeta().type !== 'dir' ? false : true;
  }

  isFile(path) {
    const child =this.tree.getDeepChild(normalizePath(path));
    return child === undefined ? false : child.getMeta().type !== 'file' ? false : true;
  }

  mkdirSync(path) {
    let arrPath = normalizePath(path);
    const newDirectory = arrPath.pop();
    this.tree.getDeepChild(arrPath).addChild(newDirectory, {type: 'dir'});
  }

  touchSync(path) {
    let arrPath = normalizePath(path);
    const newFile = arrPath.pop();
    this.tree.getDeepChild(arrPath).addChild(newFile, {type: 'file'});
  }
  // END
}
