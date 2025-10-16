function containsDuplicate(nums: number[]): boolean {
    const n = nums.length;
    let freq = {}

    for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1
    }

    for(let num of nums) {
        if(freq[num] > 1) return true
    }
    console.log(freq)

    return false;
};