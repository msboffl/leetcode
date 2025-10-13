function canMakeArithmeticProgression(arr: number[]): boolean {
    const n = arr.length;

    arr.sort((a, b) => a - b);
    let diff = arr[1] - arr[0];

    for(let i = 2; i < n; i++) {
        if(arr[i] - arr[i-1] !== diff) return false;
    }

    return true;
};