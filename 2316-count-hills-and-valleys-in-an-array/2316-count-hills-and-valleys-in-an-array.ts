function countHillValley(nums: number[]): number {
    const n = nums.length;

    let count = 0;
    for(let i = 1; i < n-1; i++) {
        let left = i - 1;
        while(left >= 0 && nums[left] === nums[i]) left--;
        let right = i + 1;
        while(right < n && nums[right] === nums[i]) right++;

        if(left >= 0 && right < n) {
            if(nums[i] > nums[left] && nums[i] > nums[right]) count++; 
            else if(nums[i] < nums[left] && nums[i] < nums[right]) count++; 
        }

        i = right - 1;
    }

    return count;
};