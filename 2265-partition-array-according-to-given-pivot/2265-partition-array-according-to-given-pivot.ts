function pivotArray(nums: number[], pivot: number): number[] {
    const n = nums.length;
    const ans = new Array(n).fill(0);

    let left = 0, right = n - 1;

    for (let i = 0, j = n - 1; i < n; i++, j--) {
        if (nums[i] < pivot) { 
            ans[left] = nums[i];
            left++
        }

        if(nums[j] > pivot) {
            ans[right] = nums[j];
            right--;
        }
    }

    while(left <= right) {
        ans[left] = pivot;
        left++;
    }

    return ans;
};