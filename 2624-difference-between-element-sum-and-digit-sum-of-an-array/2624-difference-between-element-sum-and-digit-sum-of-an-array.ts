function differenceOfSum(nums: number[]): number {
    // let sumOfArr = nums.reduce((sum, num) => sum + num, 0);
    let sumOfArr = 0
    let sumDigitsArr = 0;
    for(let i = 0; i < nums.length; i++) {
        sumOfArr += nums[i];

        let sum = 0 
        let num = nums[i]
        while(num > 0) {
            let ld = num % 10;
            sum += ld;
            num = Math.floor(num/10)
        }

        sumDigitsArr += sum;
    }

    return Math.abs(sumOfArr - sumDigitsArr);
};