function findDisappearedNumbers(nums: number[]): number[] {
    const n = nums.length;
    const set = new Set(nums);
    const ans: number[] = [];

    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) ans.push(i);
    }

    return ans;
};