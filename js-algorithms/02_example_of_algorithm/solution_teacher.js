// BEGIN
export const multi = (first, second) => {
    if (second == 0) {
        return second;
    }
    if (second == 1) {
        return first;
    }
    return first + multi(first, second - 1);
};
// END