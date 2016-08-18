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
      const sql = "select 1 AS result from INFORMATION_SCHEMA.views WHERE table_name = 'cars_without_price';";
      return db.query(sql);
    }).then((data) => {
      assert(data.length === 1, 'Expected view `cars_without_price` exists');
    }).then(() => {
      const sql = 'select * from cars_without_price;';
      return db.query(sql);
    }).then((data) => {
      assert(data.length > 0, 'Expected view based on cars table');
      assert.deepEqual(['id', 'name'], Object.keys(data[0]));
    }).then(done, done);
  });
});
