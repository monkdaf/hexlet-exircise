import buildNode from './buildNode';

export const parse = (data) => {
  const name = data[0];
  let value;
  let attributes = {};
  if (data.length === 3) {
    value = data[2];
    attributes = data[1];
  } else if (data.length === 2) {
    if (data[1] instanceof Array || (typeof data[1] === 'string')) {
      value = data[1];
    } else {
      value = '';
      attributes = data[1];
    }
  } else {
    value = '';
  }

  let body = '';
  let children;
  if (value instanceof Array) {
    children = value.map(parse);
  } else {
    body = value;
    children = [];
  }

  return buildNode(name, attributes, body, children);
};

export default parse;
