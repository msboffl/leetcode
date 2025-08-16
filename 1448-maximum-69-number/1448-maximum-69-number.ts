function maximum69Number (num: number): number {
    const arr = [];
    while(num > 0) {
        let digit = num % 10;
        arr.unshift(digit);
        num = Math.floor(num / 10)
    }
    console.log(arr);

    let max = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 6) {
            arr[i] = 9;
            break
        }
    }

    let digit = Number(arr.join(""))
    if(digit > max) max = digit;

    return max;
};