function countSquares(matrix: number[][]): number {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let dp: number[][] = Array.from({ length : rows }, () => Array(cols).fill(0));
    let cnt = 0;
    for (let j = 0; j < cols; j++){
        if (matrix[0][j] === 1){
            dp[0][j] = 1;
            cnt += dp[0][j];
        }
    }
    for (let i = 1; i < rows; i++){
        if (matrix[i][0] === 1){
            dp[i][0] = 1;
            cnt += dp[i][0];
        }
    }
    for (let i = 1; i < rows; i++){
        for (let j = 1; j < cols; j++){
            if (matrix[i][j] === 1){
                dp[i][j] = Math.min(dp[i-1][j], Math.min(dp[i-1][j-1], dp[i][j-1])) + 1;
                cnt += dp[i][j];
            }
        }
    }
    return cnt;
};