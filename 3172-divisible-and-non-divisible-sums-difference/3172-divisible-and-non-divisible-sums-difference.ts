function differenceOfSums(n: number, m: number): number {
    let NotDivisibleByM = 0;
    let divisibleByM = 0;
    
    for(let i = 1; i <= n; i++) {
        if(i % m !== 0) NotDivisibleByM += i;
        else divisibleByM += i;
    }

    return NotDivisibleByM - divisibleByM;
};