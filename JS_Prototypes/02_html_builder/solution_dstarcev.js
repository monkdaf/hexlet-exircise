﻿// BEGIN (write your solution here)
const argTypes = {
  body: a => typeof a === 'string',
  children: a => a instanceof Array,
  attrs: a => a instanceof Object,
};

const getArgName = arg =>
  Object.keys(argTypes).filter(k => argTypes[k](arg))[0];

const buildAttrString = attrs =>
  Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

const buildHtml = tagArr => {
  const tag = tagArr.slice(1)
    .reduce((acc, arg) => Object.assign(acc, { [getArgName(arg)]: arg }),
      { name: tagArr[0], attrs: {}, body: '', children: [] });

  return `<${tag.name}${buildAttrString(tag.attrs)}>` +
      `${tag.body}${tag.children.map(buildHtml).join('')}` +
    `</${tag.name}>`;
};

export default buildHtml;
// END