function isPowerOfThree(n: number): boolean {
    if(n <= 0) return false;

    let val = 1;
    while(val < n) {
        val = val * 3;
    }

    return val === n;
};