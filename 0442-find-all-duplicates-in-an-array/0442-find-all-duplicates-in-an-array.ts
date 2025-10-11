function findDuplicates(nums: number[]): number[] {
    const freq = {};

    for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    const ans = [];

    for(let num in freq) {
        if(freq[num] > 1) {
            ans.push(Number(num));
        }
    }

    return ans;


};