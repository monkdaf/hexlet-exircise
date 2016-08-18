/* global require describe it */

const fs = require('fs');
const assert = require('assert');
const pgp = require('pg-promise')(/*options*/);

const cn = {
  host: '/var/run/postgresql',
  user: 'nobody',
};

describe('table', () => {
  it('should be created', (done) => {
    const db = pgp(cn);
    const solution = fs.readFileSync('./solution.sql', 'utf8');
    const chain = db.query(solution);

    chain.then(() => {
      const sql = 'SELECT * FROM cars ORDER BY id';
      return db.many(sql);
    }).then((result) => {
      const first = result[0];
      assert.equal(first.price, '1.22');
      assert.equal(first.id, 1);

      const second = result[1];
      assert.equal(second.price, '1.22');
      assert.equal(second.id, 2);
    }).then(done, done);
  });
});
