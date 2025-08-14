function largestGoodInteger(num: string): string {
    const n = num.length;
    let largest = "";

    for(let i = 0; i < n; i++) {
        for(let j = i+1; j <= n; j++) {
            let sub = num.substring(i, j);
            let subLarge = "";
            
            if(sub.length === 3) {
                if(sub[0] === sub[1] && sub[1] === sub[2]) {
                    subLarge = sub;
                    if (subLarge > largest) {
                        largest = subLarge;
                    }
                }
            }
        }
    }

    return largest;
};