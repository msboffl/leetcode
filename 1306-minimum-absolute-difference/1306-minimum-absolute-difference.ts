function minimumAbsDifference(arr: number[]): number[][] {
    const n = arr.length;
    const ans = [];
    let minDiff = +Infinity;

    arr.sort((a, b) => a - b);

    for(let i = 1; i < n; i++) {
        let diff = arr[i] - arr[i-1];

        if(diff < minDiff) minDiff = diff;
    }
    
    for(let i = 1; i < n; i++) {
        if(arr[i] - arr[i-1] === minDiff) {
            ans.push([arr[i-1], arr[i]])
        }
    }

    return ans;
};