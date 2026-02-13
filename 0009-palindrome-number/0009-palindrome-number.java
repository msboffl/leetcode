class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0) return false;

        int n = x;
        int rev = 0;
        while(n > 0) {
            int ld = n % 10;
            rev = ld + (rev * 10);
            n = n / 10;
        }

        return x == rev;
    }
}