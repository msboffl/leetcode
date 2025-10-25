function totalMoney(n: number): number {
    let sum = 0;

    let mondayDeposit = 1;
    let todayDeposit = mondayDeposit;

    for(let i = 1; i <= n; i++) {
        sum += todayDeposit;

        if(i % 7 === 0) {
            mondayDeposit++;
            todayDeposit = mondayDeposit;
        } else {
            todayDeposit++;
        }
    }

    return sum;
};