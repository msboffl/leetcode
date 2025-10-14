function findIndices(nums: number[], indexDifference: number, valueDifference: number): number[] {
    const n = nums.length
    const ans = [-1, -1];

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(Math.abs(i-j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) {
                ans[0] = i;
                ans[1] = j;
            }
        }
    }

    return ans;
};