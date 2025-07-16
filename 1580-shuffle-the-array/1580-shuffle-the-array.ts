function shuffle(nums: number[], n: number): number[] {
    const ans = new Array(2 * n).fill(0);
    for(let i = 0; i < n; i++) {
        ans[i * 2] = nums[i];
        ans[i * 2 + 1] = nums[i + n];
    }

    return ans;
};