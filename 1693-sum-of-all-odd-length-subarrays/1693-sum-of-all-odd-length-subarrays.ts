function sumOddLengthSubarrays(arr: number[]): number {
    const n = arr.length;
    let total = 0;
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            const sub = arr.slice(i, j+1);
            if(sub.length % 2 === 1) {
                let sum = 0
                for(let k = 0; k < sub.length; k++) {
                    sum += sub[k]; 
                }
                total += sum;
            }
        }
    }

    return total;
};