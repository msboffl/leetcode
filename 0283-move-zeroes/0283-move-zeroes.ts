/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const n = nums.length;

    let index = 0;

    for(let j = 0; j < n; j++) {
        if(nums[j] !== 0) {
            nums[index++] = nums[j]
        }
    }

    for(let i = index; i < n; i++) {
        nums[i] = 0;
    }
};