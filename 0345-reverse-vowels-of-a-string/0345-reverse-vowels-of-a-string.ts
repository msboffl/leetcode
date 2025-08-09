function reverseVowels(s: string): string {
    const vowels = "aeiouAEIOU";
    const arr = s.split("");
    let left = 0;
    let right = s.length-1;

    while(left < right) {
        while(left < right && !vowels.includes(arr[left])) left++;
        while(left < right && !vowels.includes(arr[right])) right--;

        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--
    }

    return arr.join("")
};