function isPowerOfFour(n: number): boolean {
    if (n < 1) return false;
    while (n % 4 === 0) {
        n /= 4;
    }
    return n === 1;
};