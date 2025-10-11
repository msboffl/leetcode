function targetIndices(nums: number[], target: number): number[] {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const ans = [];

    for(let i = 0; i < n; i++) {
        if(nums[i] === target) ans.push(i);
    }

    return ans;
};