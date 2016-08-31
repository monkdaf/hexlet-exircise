import assert from 'assert';

import HexletFs from './HexletFs';

describe('FS', () => {
  let files;

  beforeEach(() => {
    files = new HexletFs();
    files.mkdirpSync('/etc');
    files.mkdirpSync('/opt');
    files.touchSync('/opt/file.txt');
    files.mkdirpSync('/etc/nginx/conf.d');
  });

  it('#writeFileSync', () => {
    const [data, err] = files.writeFileSync('/etc/unknown/file', 'body');
    assert.equal(data, null);
    assert.equal(err.code, 'ENOENT');

    const [data2, err2] = files.writeFileSync('/etc', 'body');
    assert.equal(data2, null);
    assert.equal(err2.code, 'EISDIR');
  });

  it('#readFileSync', () => {
    files.writeFileSync('/etc/nginx/nginx.conf', 'directives');
    const [data, err] = files.readFileSync('/etc/nginx/nginx.conf');
    assert.equal(data, 'directives');
    assert.equal(err, null);

    const [data2, err2] = files.readFileSync('/etc/nginx');
    assert.equal(data2, null);
    assert.equal(err2.code, 'EISDIR');

    const [data3, err3] = files.readFileSync('/etc/unknown');
    assert.equal(data3, null);
    assert.equal(err3.code, 'ENOENT');
  });

  it('#unlinkSync', () => {
    files.unlinkSync('/etc/nginx/nginx.conf');
    const [data, err] = files.readdirSync('/etc/nginx');
    assert.equal(err, null);
    assert.deepEqual(data, ['conf.d']);

    const [data2, err2] = files.unlinkSync('/etc/nginx');
    assert.equal(data2, null);
    assert.equal(err2.code, 'EPERM');
  });
});
