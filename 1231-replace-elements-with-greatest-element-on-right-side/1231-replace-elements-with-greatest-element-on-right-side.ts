function replaceElements(arr: number[]): number[] {
    const n = arr.length;
    let maxRight = -1;

    for(let i = n-1; i >= 0; i--) {
        const current = arr[i];
        arr[i] = maxRight;
        if(current > maxRight) {
            maxRight = current;
        }
    }

    return arr;
};