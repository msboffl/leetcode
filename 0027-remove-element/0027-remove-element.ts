function removeElement(nums: number[], val: number): number {
    const n = nums.length;
    let count = 0;

    for(let i = 0; i < n; i++) {
        if(nums[i] != val) {
            nums[count] = nums[i];
            count++;
        }
    }

    return count
};