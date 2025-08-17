function convertDateToBinary(date: string): string {
    const arr = date.split("-");
    
    const ans = []
    for(let i = 0; i < arr.length; i++) {
        let num = Number(arr[i])
        let binary = "";
        while(num > 0) {
            let ld = num % 2;
            binary = ld + binary;
            num = Math.floor(num / 2)
        }

        ans.push(binary)
    }

    return ans.join("-");
};