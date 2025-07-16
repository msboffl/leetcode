function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    const n = startTime.length;
    let count = 0;
    for(let i = 0; i < n; i++) {
        if(queryTime >= startTime[i] && queryTime <= endTime[i]) {
            count++;
        }
    }

    return count;
};