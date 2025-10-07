function smallerNumbersThanCurrent(nums: number[]): number[] {
    const n = nums.length;
    const ans = []

    for(let i = 0; i < n; i++) {
        let count = 0;
        for(let j = 0; j < n; j++) {
            if(j != i && nums[j] < nums[i]) {
                count++
            }
        }
        ans.push(count);
    }

    return ans;
};