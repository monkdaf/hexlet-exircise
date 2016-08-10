
import assert from 'assert';
//noinspection JSUnresolvedVariable
import { describe, it } from 'mocha';

import buildHtml from './solution';

describe('HtmlBuilder', () => {
  it('set 1', () => {
    const data = ['html', [
      ['meta', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', { class: 'container' }, [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['span'],
          ['span', { class: 'text', id: 'uniq-key' }],
        ]],
      ]],
    ]];

    const actual = buildHtml(data);
    const expected = `<html><meta><title>hello, hexlet!</title></meta><body class="container"><h1 class="header">html builder example</h1><div><span></span><span class="text" id="uniq-key"></span></div></body></html>`;
    assert.equal(actual, expected);
  });

  it('set 2', () => {
    const data = ['html', [
      ['body', [
        ['h2', { class: 'header' }, 'first header'],
        ['div', [
          ['p', 'hello, world'],
          ['p', 'good bye, world'],
          ['a', { class: 'link', href: 'https://hexlet.io' }, 'hexlet.io'],
        ]],
      ]],
    ]];

    const actual = buildHtml(data);
    const expected = `<html><body><h2 class="header">first header</h2><div><p>hello, world</p><p>good bye, world</p><a class="link" href="https://hexlet.io">hexlet.io</a></div></body></html>`;
    assert.equal(actual, expected);
  });
});
