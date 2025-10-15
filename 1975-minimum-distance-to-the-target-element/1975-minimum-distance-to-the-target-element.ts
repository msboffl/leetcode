function getMinDistance(nums: number[], target: number, start: number): number {
    const n = nums.length;
    let minDist = Infinity;
    for(let i = 0; i < n; i++) {
        if(nums[i] === target) {
            minDist = Math.min(minDist, Math.abs(i - start));
        }
    }

    return minDist
};