function sumOfGoodNumbers(nums: number[], k: number): number {
    const n = nums.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        const left = i - k;
        const right = i + k;

        if ((left < 0 || nums[i] > nums[left]) && (right >= n || nums[i] > nums[right])) {
            sum += nums[i];
        }
    }

    return sum;
}
