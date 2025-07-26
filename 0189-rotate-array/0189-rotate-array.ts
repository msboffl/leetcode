/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    if(k > n) k = k % n;
    nums.reverse();

    reverse(0, k-1, nums);
    reverse(k, n-1, nums);

    function reverse(start, end, nums) {
        while(start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
};