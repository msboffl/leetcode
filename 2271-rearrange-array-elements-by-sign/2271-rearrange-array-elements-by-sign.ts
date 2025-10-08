function rearrangeArray(nums: number[]): number[] {
    const n = nums.length;
    const ans = []

    let posIndex = 0, negIndex = 1;
    for(let i = 0; i < n; i++) {
        if(nums[i] > 0) {
            ans[posIndex] = nums[i];
            posIndex += 2
        } else {
            ans[negIndex] = nums[i];
            negIndex += 2
        }
    }

    return ans;
};