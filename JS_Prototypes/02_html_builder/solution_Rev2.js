// BEGIN (write your solution here)
const buildHtml = data => {
  const parseHtmlData = (acc, arr) => {
    if (arr === []) {
      return acc;
    }
    let str = '';
    let attr = '';

    if (arr.length === 1) {
      str = `<${arr[0]}></${arr[0]}>`;
    }

    if (arr.length === 2) {
      if (arr[1] instanceof Array) {
        str = `<${arr[0]}>${arr[1].reduce(parseHtmlData, '')}</${arr[0]}>`;
      } else if (typeof arr[1] === 'string') {
        str = `<${arr[0]}>${arr[1]}</${arr[0]}>`;
      } else if (arr[1] instanceof Object) {
        attr = Object.keys(arr[1]).map(key => ` ${key}="${arr[1][key]}"`).join('');
        str = `<${arr[0] + attr}></${arr[0]}>`;
      }
    }

    if (arr.length === 3) {
      attr = Object.keys(arr[1]).map(key => ` ${key}="${arr[1][key]}"`).join('');
      const bStr = `<${arr[0] + attr}>`;
      const eStr = `</${arr[0]}>`;
      if (arr[2] instanceof Array) {
        str = `${bStr}${arr[2].reduce(parseHtmlData, '')}${eStr}`;
      } else if (typeof arr[2] === 'string') {
        str = `${bStr}${arr[2]}${eStr}`;
      }
    }

    if (arr.length === 4) {
      attr = Object.keys(arr[1]).map(key => ` ${key}="${arr[1][key]}"`).join('');
      str = `<${arr[0] + attr}>${arr[2]}${arr[3].reduce(parseHtmlData, '')}</${arr[0]}>`;
    }

    return acc + str;
  };

  return `<${data[0]}>${data[1].reduce(parseHtmlData, '')}</${data[0]}>`;
};

export default buildHtml;
// END
