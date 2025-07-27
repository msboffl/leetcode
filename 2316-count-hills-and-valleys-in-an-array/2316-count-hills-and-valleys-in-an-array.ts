function countHillValley(nums: number[]): number {
    const n = nums.length;
    //Remove Duplicates
    const filterArr = [];
    for(let i = 0; i < n; i++) {
        if(i === 0 || nums[i] !== nums[i-1]) {
            filterArr.push(nums[i]);
        }
    }
    // console.log(filterArr);

    let count = 0;
    for(let i = 1; i < filterArr.length-1; i++) {
        if(filterArr[i] > filterArr[i-1] && filterArr[i] > filterArr[i+1]) count++;
        if(filterArr[i] < filterArr[i-1] && filterArr[i] < filterArr[i+1]) count++;
    }
    return count;
};