function sum(a) {
    var f = function () {
        a += arguments[0];
        return f;
    };
    f.valueOf = function () {
        return a;
    };
    return f;
}

console.log(sum(1)(2)(3)(4)(5));