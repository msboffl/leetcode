function getLeastFrequentDigit(n: number): number {
    const freq = {};
    let num = n;
    while(num > 0) {
        let ld = num % 10;
        freq[ld] = (freq[ld] || 0) + 1;
        num = Math.floor(num / 10);
    }

    let minFreq = +Infinity;
    let least = -1;
    for(let digit in freq) {
        if(freq[digit] < minFreq) {
            minFreq = freq[digit];
            least = Number(digit);
        }
    }

    return least;
};