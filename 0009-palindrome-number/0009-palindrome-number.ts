function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    let num = x;

    let rev = 0;
    while(num > 0) {
        let ld = num % 10;
        rev = ld + (rev * 10);
        num = Math.floor(num / 10);
    }

    return rev === x;
};