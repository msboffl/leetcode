function peakIndexInMountainArray(arr: number[]): number {
    let i = 0;
    while(arr[i] < arr[i+1]) {
        i++;
    }

    return i;
};