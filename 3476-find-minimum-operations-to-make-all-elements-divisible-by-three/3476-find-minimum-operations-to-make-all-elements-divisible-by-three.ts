function minimumOperations(nums: number[]): number {
    let ops = 0;

    for(const num of nums) {
        if(num % 3 !== 0) ops++;
    }

    return ops;
};