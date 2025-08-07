function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function countPrimeSetBits(left: number, right: number): number {
    let count = 0;

    for (let num = left; num <= right; num++) {
        let n = num;
        let bits = 0;

        while (n > 0) {
            bits += n % 2;
            n = Math.floor(n / 2);
        }

        if (isPrime(bits)) {
            count++;
        }
    }

    return count;
}
