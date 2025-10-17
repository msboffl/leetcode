function pivotIndex(nums: number[]): number {
    const n = nums.length;

    let totalSum = 0;
    for(let i = 0; i < n; i++) {
        totalSum += nums[i];
    }

    let leftSum = 0;
    for(let i = 0; i < n; i++) {
        let rightSum = totalSum - leftSum - nums[i];

        if(leftSum === rightSum) return i;
        leftSum += nums[i]
    }

    return -1;
};