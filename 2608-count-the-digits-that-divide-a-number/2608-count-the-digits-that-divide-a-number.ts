function countDigits(num: number): number {
    let count = 0;
    const digits = num.toString().split('');

    for (const d of digits) {
        const digit = Number(d);
        if (num % digit === 0) {
            count++;
        }
    }

    return count;
}
