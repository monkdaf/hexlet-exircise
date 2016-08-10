const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)
export const parse = data => {
  let val = '';
  const name = data[0];
  let attributes = {};
  let children = [];

  if (data.length === 4) {
    attributes = data[1];
    val = data[2];
    children = data[3].map(parse);
  } else if (data.length === 3) {
    val = data[2];
    attributes = data[1];
  } else if (data.length === 2) {
    if (data[1] instanceof Array || typeof data[1] === 'string') {
      val = data[1];
    } else {
      attributes = data[1];
    }
  }

  let body = '';
  if (val instanceof Array) {
    children = val.map(parse);
  } else {
    body = val;
  }

  return {name, attributes, body, children};
};

export const render = ast => {
  const name = ast.name;
  const attr = Object.keys(ast.attributes).reduce(
    (acc, key) => `${acc} ${key}="${ast.attributes[key]}"`,
    '');
  const endName = singleTagsList.has(name) ? '' : `</${ast.name}>`;

  return `<${ast.name}${attr}>${ast.body}${ast.children.map(render).join('')}${endName}`;
};
// END
