function replaceElements(arr: number[]): number[] {
    const n = arr.length;
    const ans: number[] = [];
    let maxRight = -1;

    for(let i = n-1; i >= 0; i--) {
        ans.push(maxRight);
        if(arr[i] > maxRight) {
            maxRight = arr[i];
        }
    }

    return ans.reverse();
};