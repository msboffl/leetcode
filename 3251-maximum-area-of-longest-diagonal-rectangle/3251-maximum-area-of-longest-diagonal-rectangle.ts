function areaOfMaxDiagonal(dimensions: number[][]): number {
    let maxDiaSq = 0;
    let maxArea = 0;
    for (const dim of dimensions) {
        const l = dim[0];
        const w = dim[1];
        const diaSq = l * l + w * w;
        const area = l * w;
        if (diaSq > maxDiaSq) {
            maxDiaSq = diaSq;
            maxArea = area;
        } else if (diaSq === maxDiaSq) {
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
}