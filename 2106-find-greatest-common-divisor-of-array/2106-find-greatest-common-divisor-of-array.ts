function gcd(a, b) {
    while(b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

function findGCD(nums: number[]): number {
    let max = -Infinity;
    let min = +Infinity;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max) max = nums[i];
        if(nums[i] < min) min = nums[i]
    }

    return gcd(min, max);
};