function minElement(nums: number[]): number {  
    const addNums = nums.map((data, index) => {
        let addNum = 0;
        let numArr = data.toString().split('');
        for (let i = 0; i < numArr.length; i++) {
             addNum += Number(numArr[i]);
            
        };
        return addNum;
    })
    return Math.min(...addNums)
};