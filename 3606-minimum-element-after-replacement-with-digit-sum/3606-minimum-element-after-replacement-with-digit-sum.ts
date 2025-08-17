function minElement(nums: number[]): number {
    let min = Infinity;
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];

        let sum = 0
        while(num > 0) {
            let ld = num % 10;
            sum += ld;
            num = Math.floor(num/10);
        }

        nums[i] = sum;

        if(nums[i] < min) min = nums[i];
    }

    return min;
};