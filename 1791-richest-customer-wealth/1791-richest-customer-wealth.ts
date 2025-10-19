function maximumWealth(accounts: number[][]): number {
    const rowLength = accounts.length;
    const colLength = accounts[0].length;

    let max = 0;

    for(let i = 0; i < rowLength; i++) {
        let sum = 0;
        for(let j = 0; j < colLength; j++) {
            sum += accounts[i][j];
        }

        if(sum >= max) max = sum
    }

    return max;
};