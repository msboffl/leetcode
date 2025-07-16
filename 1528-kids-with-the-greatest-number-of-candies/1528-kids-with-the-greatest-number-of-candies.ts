function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const n = candies.length;
    const ans = new Array(n).fill(false);
    let maxCandie = 0
    for(let i = 0; i < n; i++) {
        if(candies[i] > maxCandie) {
            maxCandie = candies[i];
        }
    }

    for(let i = 0; i < n; i++) {
        if(candies[i] + extraCandies >= maxCandie) {
            ans[i] = true;
        }
    }
    
    return ans;
};