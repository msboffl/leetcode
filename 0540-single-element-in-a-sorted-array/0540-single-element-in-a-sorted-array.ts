function singleNonDuplicate(nums: number[]): number {
    const n = nums.length;
    const freq = {}


    for(let i = 0; i < n; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }

    for(const num in freq) {
        if(freq[num] === 1) return Number(num)
    }
};