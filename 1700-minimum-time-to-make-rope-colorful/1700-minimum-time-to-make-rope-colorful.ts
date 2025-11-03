function minCost(colors: string, neededTime: number[]): number {
    const heap: MinHeap<number> = new MinHeap();
    neededTime.push(0)
    colors += "-1"
    heap.push(neededTime[0])
    let prev = colors[0]
    let res = 0
    for (let i = 1; i < colors.length; i++) {
        if (colors.charAt(i) == prev) {
            heap.push(neededTime[i])
        } else {
            if (heap.size() == 1) {
                heap.clear()
                heap.push(neededTime[i])
                prev = colors[i]
            } else {
                while (heap.size() != 1) {
                    res += heap.pop()
                }
                heap.clear()
                heap.push(neededTime[i])
                prev = colors[i]
            }
        }
    }
    return res
};