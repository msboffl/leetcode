function reorderedPowerOf2(n: number): boolean {
    const sig = (x: number): string => {
        return x.toString().split("").sort().join("");
    };

    const target = sig(n);
    for (let i = 0; i < 31; i++) { 
        if (sig(1 << i) === target) {
            return true;
        }
    }
    return false;
};