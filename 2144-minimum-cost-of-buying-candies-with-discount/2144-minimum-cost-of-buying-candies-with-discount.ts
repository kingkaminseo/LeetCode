function minimumCost(cost: number[]): number {
    const costDesc = cost.sort((a, b) => a - b).reverse();
    let freeCandyCount = 0
    let costNum = 0
    for (let i = 0; i < costDesc.length; i++) {
        if (freeCandyCount === 2) {
            freeCandyCount = 0
        } else {
            freeCandyCount = freeCandyCount + 1;
            costNum = costNum + costDesc[i]

        }   
    }
    return costNum
};