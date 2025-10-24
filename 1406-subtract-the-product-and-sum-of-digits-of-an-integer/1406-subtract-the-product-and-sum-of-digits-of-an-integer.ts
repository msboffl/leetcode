function subtractProductAndSum(n: number): number {
    let sum = 0;
    let prod = 1;

    while(n > 0) {
        let ld = n % 10;
        sum += ld;
        prod *= ld;
        n = Math.floor(n / 10)
    }

    return prod - sum;
};