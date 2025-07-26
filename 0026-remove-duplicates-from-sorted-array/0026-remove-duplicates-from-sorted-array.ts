function removeDuplicates(nums: number[]): number {
    const n = nums.length;
    if(n <= 1) return n;

    let index = 0;
    for(let i = 0; i < n; i++) {
        if(nums[i] != nums[i-1]) {
            nums[index++] = nums[i];
        }
    }

    return index;
};