function findGCD(nums: number[]): number {
    let a = Math.min(...nums);
    let b = Math.max(...nums);

    while(b != 0) {
        [a, b] = [b, a % b];
    }

    return a;
};