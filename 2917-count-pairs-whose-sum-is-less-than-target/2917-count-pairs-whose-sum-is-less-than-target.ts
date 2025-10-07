function countPairs(nums: number[], target: number): number {
    const n = nums.length;
    let count = 0;

    nums.sort((a, b) => a - b);
    
    let left = 0;
    let right = n-1;

    while(left < right) {
        if(nums[left] + nums[right] < target) {
            count += right - left;
            left++;
        } else {
            right--;
        }
    }

    return count;
};