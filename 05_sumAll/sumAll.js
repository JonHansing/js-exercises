const sumAll = function(startNum, endNum) {
    if (startNum < 0 || endNum < 0 || typeof startNum != 'number' ||
    typeof endNum != 'number') return 'ERROR';
    
    let result = 0;

    const smallNum = Math.min(startNum, endNum);
    const bigNum = Math.max(startNum, endNum);

    for (let i = smallNum; i <= bigNum; i++) {
        result += i;
    };
    return result;
};

// Do not edit below this line
module.exports = sumAll;
