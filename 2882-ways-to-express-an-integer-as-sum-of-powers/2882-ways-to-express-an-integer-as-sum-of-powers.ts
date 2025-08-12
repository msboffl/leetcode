function numberOfWays(n: number, x: number): number {
    const MOD = 1e9 + 7;
    const dp: number[][] = Array.from({ length: n + 1 }, () =>
        Array(n + 1).fill(0),
    );
    dp[0][0] = 1;
    for (let i = 1; i <= n; i++) {
        const val = Math.pow(i, x);
        for (let j = 0; j <= n; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= val) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - val]) % MOD;
            }
        }
    }
    return dp[n][n];
}