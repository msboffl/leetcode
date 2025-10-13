/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let ones = 0;
    let twos = 0;
    let zeros = 0;
    const n = nums.length;

    for(let i = 0; i < n; i++) {
        if(nums[i] === 0) zeros++;
        else if(nums[i] === 1) ones++;
        else twos++;
    }

    for(let i = 0; i < zeros; i++) {
        nums[i] = 0;
    }

    for(let i = zeros; i < zeros + ones; i++) {
        nums[i] = 1;
    }

    for(let i = zeros + ones; i < zeros + ones + twos; i++) {
        nums[i] = 2;
    }
};