function convertDateToBinary(date: string): string {
    let dateArr = date.split("-");
    const ans = []

    for(let i = 0; i < dateArr.length; i++) {
        let binary = "";
        let num = Number(dateArr[i])

        while(num > 0) {
            let ld = num % 2;
            binary = ld + binary;
            num = Math.floor(num / 2)
        }

        ans.push(binary);
    }

    return ans.join("-")
};