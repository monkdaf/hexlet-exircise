// BEGIN (write your solution here)
const buildHtml = data => {
  const parseHtmlData = (acc, arr) => {
    if (arr === []) {
      return acc;
    }
    let bStr = '';
    let eStr = '';
    let attr = '';

    if (arr.length === 1) {
      bStr = `<${arr[0]}>`;
      eStr = `</${arr[0]}>`;
    }

    if (arr.length === 2) {
      if (arr[1] instanceof Array) {
        bStr = `<${arr[0]}>${arr[1].reduce(parseHtmlData, '')}`;
        eStr = `</${arr[0]}>`;
      } else if (typeof arr[1] === 'string') {
        bStr = `<${arr[0]}>${arr[1]}`;
        eStr = `</${arr[0]}>`;
      } else if (arr[1] instanceof Object) {
        attr = Object.keys(arr[1]).map(key => ` ${key}="${arr[1][key]}"`).join('');
        bStr = `<${arr[0] + attr}>`;
        eStr = `</${arr[0]}>`;
      }
    }

    if (arr.length === 3) {
      attr = Object.keys(arr[1]).map(key => ` ${key}="${arr[1][key]}"`).join('');
      bStr = `<${arr[0] + attr}>`;
      eStr = `</${arr[0]}>`;
      if (arr[2] instanceof Array) {
        bStr = bStr + arr[2].reduce(parseHtmlData, '');
      } else if (typeof arr[2] === 'string') {
        bStr = `${bStr}${arr[2]}`;
      }
    }

    if (arr.length === 4) {
      attr = Object.keys(arr[1]).map(key => ` ${key}="${arr[1][key]}"`).join('');
      bStr = `<${arr[0] + attr}>${arr[2]}${arr[3].reduce(parseHtmlData, '')}`;
      eStr = `</${arr[0]}>`;
    }

    return acc + bStr + eStr;
  };

  return `<${data[0]}>${data[1].reduce(parseHtmlData, '')}</${data[0]}>`;
};

export default buildHtml;
// END
