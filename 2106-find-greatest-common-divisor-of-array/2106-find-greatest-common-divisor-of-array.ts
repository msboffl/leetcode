function findGCD(nums: number[]): number {
    let minNum = nums[0];
    let maxNum = nums[0]
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < minNum) minNum = nums[i];
        if(nums[i] > maxNum) maxNum = nums[i];

    }
    
    let gcdVal = 1;
    for(let i = 1; i <= minNum; i++) {
        if(minNum % i === 0 && maxNum % i === 0) {
            gcdVal = i
        }
    }

    return gcdVal;
};