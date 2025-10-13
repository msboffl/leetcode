function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const ans = [];

    let prefix = 1;

    for(let i = 0; i < n; i++) {
        ans[i] = prefix;
        prefix *= nums[i]
    }

    let suffix = 1;
    for(let i = n-1; i >= 0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i]
    }

    return ans;
};