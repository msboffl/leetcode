function countPairs(nums: number[], k: number): number {
    let count = 0;
    for(let i = 0; i < nums.length-1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if((i*j) % k == 0 && nums[i] == nums[j])  {
                count++;
            }
        }
    }

    return count
};