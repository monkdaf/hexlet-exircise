import Node from './Node';

// BEGIN (write your solution here)
class Dir extends Node {
  constructor(path) {
    super(path, {type: 'dir'});
  }

  isFile(path){
    return this.getStats().isFile();
  }

  isDirectory(path) {
    return this.getStats().isDirectory();
  }
}

export default Dir;
// END
