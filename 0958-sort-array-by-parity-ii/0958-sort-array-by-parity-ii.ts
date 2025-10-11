function sortArrayByParityII(nums: number[]): number[] {
    const n = nums.length;

    let even = 0, odd = 1;
    while(even < n && odd < n) {
        if(nums[even] % 2 === 0) {
            even += 2; 
            continue;
        }
        if(nums[odd] % 2 === 1) {
            odd += 2; 
            continue;
        }

        [nums[even], nums[odd]] = [nums[odd], nums[even]];
        even += 2;
        odd += 2;
        
    } 

    return nums;
};