function countSubstrings(s: string): number {
    const n = s.length;
    let count = 0;
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j <= n; j++) {
            let sub = s.substring(i, j);
            let left = 0;
            let right = sub.length-1;
            while(left < right) {
                if(sub[left] != sub[right]) break
                left++;
                right--
            }

            if(left >= right) {
                count++;
            }
        }

    }

    return count;
};