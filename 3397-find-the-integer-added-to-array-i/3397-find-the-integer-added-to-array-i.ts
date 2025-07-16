function addedInteger(nums1: number[], nums2: number[]): number {
    let x = 0;
    const n = nums2.length
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    for(let i = 0; i < n; i++) {
        x = nums2[i] - nums1[i]
    }

    return x;
};