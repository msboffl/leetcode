function subtractProductAndSum(n: number): number {
    let sum = 0;
    let product = 1;
    while(n > 0) {
        let ld = n % 10;
        sum += ld;
        product *= ld
        n = Math.floor(n/10);
    }

    return product - sum;
};