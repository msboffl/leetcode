/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const n = nums.length;
    let index = 0;
    for(let i = 0; i < n; i++) {
        if(nums[i] !== 0) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            index++;
        }
    }
};