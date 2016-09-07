// BEGIN (write your solution here)

// END

const merge = (xs, ys) => {
  if (xs.length === 0) return ys;
  if (ys.length === 0) return xs;
  const x = xs[0];
  const y = ys[0];
  return (x < y) ?
     [x, ...merge(xs.slice(1), ys)] :
     [y, ...merge(xs, ys.slice(1))]
}
