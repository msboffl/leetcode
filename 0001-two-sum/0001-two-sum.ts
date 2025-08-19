function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if(map.has(comp)) {
            return [i, map.get(comp)]
        } else {
            map.set(nums[i], i)
        }
    }
};