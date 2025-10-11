function findLucky(arr: number[]): number {
    const freq = {};

    for(let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let ans = -1;
    for(let num in freq) {
        const n = Number(num)
        if(n === freq[num]) {
            ans = Math.max(n, ans)
        }
    }

    return ans;
};