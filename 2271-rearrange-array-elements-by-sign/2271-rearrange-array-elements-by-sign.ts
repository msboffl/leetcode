function rearrangeArray(nums: number[]): number[] {
    const positives = [], negatives = [];
    const ans = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) positives.push(nums[i]);
        else negatives.push(nums[i]);
    }
    
    let i = 0, j = 0;

    while(i < positives.length && negatives.length) {
        ans.push(positives[i]);
        ans.push(negatives[j]);
        i++;
        j++;
    }

    return ans;
};