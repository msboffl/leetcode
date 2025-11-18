class Solution {
    private int countOnes(int i, int[] memo) {
        if(memo[i] != -1) return memo[i];

        memo[i] = countOnes(i/2, memo) + (i % 2);

        return memo[i];
    }
    public int[] countBits(int n) {
        int[] ans = new int[n+1];

        Arrays.fill(ans, -1);

        ans[0] = 0;

        for(int i = 1; i <= n; i++) {
            ans[i] = countOnes(i, ans);
        }

        return ans;
    }
}