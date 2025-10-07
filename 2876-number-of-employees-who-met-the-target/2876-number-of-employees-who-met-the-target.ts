function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    const n = hours.length;
    let count = 0;

    for(let i = 0; i < n; i++) {
        if(hours[i] >= target) count++
    }

    return count;
};