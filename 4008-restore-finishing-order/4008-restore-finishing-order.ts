function recoverOrder(order: number[], friends: number[]): number[] {
    const ans = []

    const friendSet = new Set(friends);
    for(const id of order) {
        if(friendSet.has(id)) ans.push(id)
    }

    return ans;
};