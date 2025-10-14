function removeDuplicates(nums: number[]): number {
    const n = nums.length;
    let count = 0;
    for(let i = 0; i < n; i++) {
        if(nums[i] !== nums[i+2]) {
            nums[count] = nums[i];
            count++;
        }
    }

    return count;
};