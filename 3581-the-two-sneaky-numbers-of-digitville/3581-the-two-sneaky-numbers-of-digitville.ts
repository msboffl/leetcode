function getSneakyNumbers(nums: number[]): number[] {
    const n = nums.length;
    const ans = [];
    const freq = new Array(n).fill(0);

    for(let num of nums) {
        freq[num]++
    }

    for(let i = 0; i < freq.length; i++) {
        if(freq[i] >= 2) ans.push(i);
    }

    return ans;
};