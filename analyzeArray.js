function analyzeArray(myArr) {
    const length = myArr.length;

    const max = Math.max(...myArr);

    const min = Math.min(...myArr);

    const total = myArr.reduce((prev, curr) => prev + curr,
     0);
     
    const average = total / length;

    return {average, min, max, length };
}

module.exports = analyzeArray;