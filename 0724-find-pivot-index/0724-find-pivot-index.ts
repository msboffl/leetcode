function pivotIndex(nums: number[]): number {
    const n = nums.length;

    const leftSum = new Array(n).fill(0);
    for(let i = 1; i < n; i++) {
        leftSum[i] = nums[i-1] + leftSum[i-1];
    }

    const rightSum = new Array(n).fill(0);
    for(let i = n-2; i >= 0; i--) {
        rightSum[i] = nums[i+1] + rightSum[i+1]
    }

    for(let i = 0; i < n; i++) {
        if(leftSum[i] === rightSum[i]) return i
    }

    return -1;
};