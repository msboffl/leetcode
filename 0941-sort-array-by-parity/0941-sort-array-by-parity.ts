function sortArrayByParity(nums: number[]): number[] {
    const even = [];
    const odd = [];

    for(let num of nums) {
        if(num % 2 === 0) even.push(num);
        else odd.push(num)
    }

    const ans = [];

    for(let num of even) {
        ans.push(num);
    }

    for(let num of odd) {
        ans.push(num);
    }

    return ans;
};