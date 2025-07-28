function countMaxOrSubsets(nums: number[]): number {
    const n = nums.length;
    let maxOr = 0;
    
    for (let num of nums) {
        maxOr |= num;
    }

    let count = 0;

    function dfs(index: number, currentOr: number) {
        if (index === n) {
            if (currentOr === maxOr) count++;
            return;
        }

        dfs(index + 1, currentOr | nums[index]);

        dfs(index + 1, currentOr);
    }

    dfs(0, 0);
    return count;
}