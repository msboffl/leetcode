function maxFrequencyElements(nums: number[]): number {
    const freq = {};
    let max = 0
    for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1;

        if(freq[num] > max) {
            max = freq[num]
        }
    }

    let total = 0;
    for(let num in freq) {
        if(freq[num] === max) {
            total += freq[num];
        }
    }
    
    return total;
};