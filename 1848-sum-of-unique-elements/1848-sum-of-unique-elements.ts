function sumOfUnique(nums: number[]): number {
    let freq = {};

    for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1
    }


    let sum = 0;
    for(let num in freq) {
        
        if(freq[num] === 1) {
            sum += Number(num);
        }
    }

    return sum;
};