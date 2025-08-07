function reverse(x: number): number {
    const isNeg = x < 0;
    x = Math.abs(x);
    let rev = 0
    const INT_MAX = 2 ** 31 - 1;
    while (x > 0) {
        let rem = x % 10;
        
        rev = (rev * 10) + rem;
        x = Math.floor(x / 10);
    }

    if(rev > INT_MAX) return 0;
    return isNeg ? -rev: rev;
};