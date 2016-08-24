import assert from 'assert';

import HexletFs from './HexletFs';


describe('FS', () => {
  let files;

  beforeEach(() => {
    files = new HexletFs();
  });

  it('#mkdirSync', () => {
    files.mkdirSync('/etc');
    assert.ok(files.statSync('/etc').isDirectory());

    files.mkdirSync('/etc/nginx');
    assert.ok(files.statSync('/etc/nginx').isDirectory());
  });

  it('#mkdirSync2', () => {
    files.mkdirSync('/var/');
    assert.ok(files.statSync('/var////').isDirectory());
    assert.ok(files.statSync('/var').isDirectory());

    files.mkdirSync('/var//log//////');
    assert.ok(files.statSync('/var/log').isDirectory());
    assert.ok(files.statSync('/var///log').isDirectory());
  });

  it('#touchSync', () => {
    files.touchSync('/file.txt');
    assert.ok(files.statSync('/file.txt').isFile());

    files.mkdirSync('/etc');
    files.touchSync('/etc/bashrc');
    assert.ok(files.statSync('/etc/bashrc').isFile());
  });
});
