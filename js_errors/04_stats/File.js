import Node from './Node';

// BEGIN (write your solution here)
class File extends Node {
  constructor(path) {
    super(path, {type: 'file'});
  }

  isFile(path){
    return this.getStats().isFile();
  }

  isDirectory(path) {
    return this.getStats().isDirectory();
  }
}

export default File;
// END
