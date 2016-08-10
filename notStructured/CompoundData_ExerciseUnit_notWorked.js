export const makeRectangle = (p1, h, w) => cons (p1, cons( h, w));

export const height = (rect) => car(cdr(rect));
export const width = (rect) => cdr(cdr(rect));

export const square = (rect) => height(rect) * width(rect);
export const perimeter  = (rect) => (height(rect) + width(rect)) * 2;

export const containsTheOrigin  = (rect) => {
    const p1 = car(rect);
    const p2 = makePoint(car(p1)+width(rect), cdr(p1));
    const p3 = makePoint(car(p1)+width(rect), cdr(p1) - height(rect));
    const p4 = makePoint(car(p1), cdr(p1) - height(rect));
    return quadrant(p1) === 2 
        && quadrant(p2) === 1
        && quadrant(p3) === 4
        && quadrant(p4) === 3;
    
};