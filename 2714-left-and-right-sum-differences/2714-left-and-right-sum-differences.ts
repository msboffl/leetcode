function leftRightDifference(nums: number[]): number[] {
    const n = nums.length;
    const ans = new Array(n).fill(0);

    const totalSum = nums.reduce((acc, val) => acc + val, 0);
    let leftSum = 0

    for(let i = 0; i < n; i++) {
        let rightSum = totalSum - leftSum - nums[i];
        ans[i] = Math.abs(leftSum - rightSum);
        leftSum += nums[i];
    }

    return ans;
};