function isPowerOfFour(n: number): boolean {
    if(n <= 0) return false;
    let val = 1;
    while(val < n) {
        val = val * 4
    }

    return (val === n);
};