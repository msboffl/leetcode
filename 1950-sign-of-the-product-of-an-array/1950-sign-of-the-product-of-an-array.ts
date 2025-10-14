function signFunc(x) {
    if(x > 0) return 1;
    else if(x < 0) return -1;
    else return 0;
}

function arraySign(nums: number[]): number {
    const n = nums.length;
    let product = 1;
    for(let i = 0; i < n; i++) {
        product *= nums[i]
    }

    return signFunc(product);
};