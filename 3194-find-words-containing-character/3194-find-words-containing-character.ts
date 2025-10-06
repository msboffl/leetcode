function findWordsContaining(words: string[], x: string): number[] {
    const n = words.length;
    const ans = [];

    for(let i = 0; i < n; i++) {
        if(words[i].includes(x)) ans.push(i)
    }

    return ans;
};