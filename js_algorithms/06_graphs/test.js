import { beforeEach, describe, it } from 'mocha';
import assert from 'assert';

import { sortGraph } from './solution';

describe('sortGraph', () => {
    it('case1', () => {
      const graph1 = {
          'mongo': [],
          'tzinfo': ['thread_safe'],
          'uglifier': ['execjs'],
          'execjs': ['thread_safe', 'json'],
          'redis': []
      };
      const result1 = ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];

      assert.deepEqual(result1, sortGraph(graph1));
    });
    it('case2', () => {
      const graph2 = {
        'wrong': ['predicated', 'sexp_processor'],
        'xpath': ['nokogiri'],
        'predicated': ['htmlentities'],
        'sexp_processor': [],
        'nokogiri': ['wrong'],
        'virtus': []
      };
      const result2 = ['htmlentities', 'predicated', 'sexp_processor', 'wrong', 'nokogiri', 'xpath', 'virtus'];

      assert.deepEqual(result2, sortGraph(graph2));
    });
});
