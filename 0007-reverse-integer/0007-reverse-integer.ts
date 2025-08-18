function reverse(x: number): number {
    const neg = x < 0;

    let num = Math.abs(x);
    let rev = 0
    while(num > 0) {
        let ld = num % 10;
        rev = ld + (rev * 10);
        num = Math.floor(num / 10);
    }

    if(rev > 2**31 - 1) return 0;
    return neg ? -rev: rev;
};