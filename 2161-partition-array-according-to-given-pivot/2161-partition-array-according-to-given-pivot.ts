function pivotArray(nums: number[], pivot: number): number[] {
    let lowerNums = nums.filter((num) =>  num < pivot);
    let Nums = nums.filter((num) =>  num === pivot);
    let higherNums = nums.filter((num) =>  num > pivot);

    return [...lowerNums, ...Nums, ...higherNums]
};