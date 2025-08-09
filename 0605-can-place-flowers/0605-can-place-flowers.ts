function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const bed = [0, ...flowerbed, 0];

    for(let i = 1; i < bed.length-1; i++) {
        if(bed[i-1] === 0 && bed[i] === 0 && bed[i+1] === 0) {
            bed[i] = 1;
            n -= 1;
        }
    }

    return n <= 0;

};