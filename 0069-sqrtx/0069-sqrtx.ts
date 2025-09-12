function mySqrt(x: number): number {
    if(x === 0 || x === 1) return x;

    let r = 1;
    while(r * r <= x) r++;

    return r - 1;
};