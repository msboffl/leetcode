function subarraySum(nums: number[]): number {
    const n = nums.length;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        const start = Math.max(0, i - nums[i]);
        let inSum = 0
        for(let j = start; j <= i; j++) {
            inSum += nums[j]
        }

        sum += inSum;
    }

    return sum;
};