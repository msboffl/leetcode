/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    const temp = new Array(n).fill(0);
    for(let i = 0; i < k; i++) {
        temp[i] = nums[n - k + i];
    }

    for(let i = 0; i < n-k; i++) {
        temp[i + k] = nums[i];
    }

    for(let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
};