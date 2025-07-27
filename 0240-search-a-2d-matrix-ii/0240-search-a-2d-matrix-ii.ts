function searchMatrix(matrix: number[][], target: number): boolean {
    const rows = matrix.length;
    for(let i = 0; i < rows; i++) {
        let left = 0;
        let right = matrix[i].length;

        while(left <= right) {
            let mid = Math.floor((left + right)/2);
            if(matrix[i][mid] === target) return true;
            else if(matrix[i][mid] < target) left = mid + 1;
            else right = mid - 1;
        }
    }

    return false
};