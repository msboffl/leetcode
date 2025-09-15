function mergeAlternately(word1: string, word2: string): string {
    let i = 0, j = 0;
    let ans = "";
    while(i < word1.length && j < word2.length) {
        ans += word1[i];
        ans += word2[j];
        i++;
        j++;
    }

    while(i < word1.length) {
        ans += word1[i]
        i++;
    }

    while(j < word2.length) {
        ans += word2[j]
        j++;
    }

    return ans;
};