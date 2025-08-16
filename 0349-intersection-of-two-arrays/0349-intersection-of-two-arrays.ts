function intersection(nums1: number[], nums2: number[]): number[] {
    const st = new Set(nums1);

    const res = [];

    for(let i = 0; i < nums2.length; i++) {
        if(st.has(nums2[i])) {
            res.push(nums2[i])
            st.delete(nums2[i]);
        }
    }

    return res;
};