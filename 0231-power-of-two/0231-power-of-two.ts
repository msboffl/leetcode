function isPowerOfTwo(n: number): boolean {
    if(n <= 0) return false;
    for(let i = 0; 2**i <= n; i++) {
        if(2**i == n) return true;
    }

    return false;
};