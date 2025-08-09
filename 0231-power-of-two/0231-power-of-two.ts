function isPowerOfTwo(n: number): boolean {
    if(n <= 0) return false;

    let val = 1;
    while(val < n) {
        val *= 2;
    }

    return val == n;
};