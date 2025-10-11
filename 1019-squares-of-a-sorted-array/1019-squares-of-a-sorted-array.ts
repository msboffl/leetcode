function sortedSquares(nums: number[]): number[] {
    const n = nums.length;

    for(let i = 0; i < n; i++) {
        nums[i] = nums[i] * nums[i]
    }

    return nums.sort((a, b) => a - b);
};