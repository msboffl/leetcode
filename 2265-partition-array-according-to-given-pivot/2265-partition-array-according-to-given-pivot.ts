function pivotArray(nums: number[], pivot: number): number[] {
    const n = nums.length;
    const pl = [], pr = [], pe = [];
    
    for(let i = 0; i < n; i++) {
        if(nums[i] < pivot) pl.push(nums[i])
        else if(nums[i] > pivot) pr.push(nums[i])
        else pe.push(nums[i]);
    }

    return [...pl, ...pe, ...pr];
};