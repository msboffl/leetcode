function isPalindrome(x: number): boolean {
    if(x < 0) return false;

   
    let num = Math.abs(x);
    let reverse = 0;
    while(num > 0) {
        let rem = num % 10;
        reverse = (reverse * 10) + rem;
        num = Math.floor(num / 10);
    }

    return reverse == x;
    
};