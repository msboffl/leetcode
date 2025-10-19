function recoverOrder(order: number[], friends: number[]): number[] {
    const ans = [];
    for(let i = 0; i < order.length; i++) {
        for(let j = 0; j < friends.length; j++) {
            if(order[i] === friends[j]) {
                ans.push(order[i])
            }
        }
    }

    return ans;
};