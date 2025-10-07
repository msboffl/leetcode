function leftRightDifference(nums: number[]): number[] {
    const n = nums.length;
    const ans = [];

    for(let i = 0; i < n; i++) {
        let leftSum = 0
        for(let j = 0; j < i; j++) {
            leftSum += nums[j]
        }

        let rightSum = 0
        for(let j = i+1; j < n; j++) {
            rightSum += nums[j]
        }

        ans.push(Math.abs(leftSum - rightSum))
    }

    return ans;
};