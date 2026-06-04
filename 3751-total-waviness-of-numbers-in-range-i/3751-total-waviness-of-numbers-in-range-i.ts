function totalWaviness(num1: number, num2: number): number {
    let count = 0;
    for (let i = num1; i <= num2; i++) {

        const waveArr = i.toString().split('').map(Number);
        for (let j = 0; j < waveArr.length; j++) {
            if (j === 0 || j === waveArr.length -1) {
                continue;
            }
            if (waveArr[j -1] < waveArr[j] && waveArr[j] > waveArr[j + 1]
            || waveArr[j -1] > waveArr[j] && waveArr[j] < waveArr[j + 1]) {
                count = count + 1
            }
        };
    };
    return count;
};