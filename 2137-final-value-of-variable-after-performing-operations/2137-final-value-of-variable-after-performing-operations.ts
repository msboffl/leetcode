function finalValueAfterOperations(operations: string[]): number {
    const n = operations.length;
    let x = 0;

    for(let i = 0; i < n; i++) {
        if(operations[i] === "++X" || operations[i] === "X++") x++;
        else x--;
    }

    return x;
};