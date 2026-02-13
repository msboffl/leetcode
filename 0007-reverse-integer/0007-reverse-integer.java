class Solution {
    public int reverse(int x) {
        int n = x;
        if(n < 0) {
            n = -1 * x;
        }

        long rev = 0;
        while(n > 0) {
            int ld = n % 10;
            rev = ld + (rev * 10);
            n = n / 10;
        }

        if(rev < Integer.MIN_VALUE || rev > Integer.MAX_VALUE) return 0;

        if(x < 0) return (int) -rev;
        return (int) rev;
    }
}