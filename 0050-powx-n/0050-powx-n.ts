function myPow(x: number, n: number): number {
    const negative = n < 0;

    let total = 1;
    n = Math.abs(n);
    while(n > 0) {
        if(n % 2 === 1) total *= x;
        x *= x;
        n = Math.floor(n/2);
    }

    return negative ? 1/total : total;
};