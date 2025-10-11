function frequencySort(nums: number[]): number[] {
    const freq = {};
    
    for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1
    }

    nums.sort((a, b) => {
        if(freq[a] === freq[b]) {
            return b - a;
        }

        return freq[a] - freq[b];
    })

    return nums;
};