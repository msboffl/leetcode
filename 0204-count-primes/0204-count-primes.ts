function countPrimes(n: number): number {
    let count = 0
    if(n <= 1) return count;

    const isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for(let i = 2; i*i < n; i++) {
        if(isPrime[i]) {
            for(let j = i*i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    for(let i = 2; i < n; i++) {
        if(isPrime[i]) count++
    }

    return count;
};