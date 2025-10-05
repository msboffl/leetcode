function missingNumber(nums: number[]): number {
    const n = nums.length;

    const expectedSum = (n * (n + 1)) / 2;

    let totalSum = 0
    for(let i = 0; i < n; i++) {
        totalSum += nums[i];
    }

    return expectedSum - totalSum
};