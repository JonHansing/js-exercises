const fibonacci = function(inputNum) {
    let num = Number(inputNum);
    const arr = [1,1];
    if (arr.length < num) {
        for (let i = arr.length; i < num; i++) {
            arr[i] = arr[i-1] + arr[i-2];
        };
    } else if (num == 0) {
        return 0;
    } else if (num < 1) {
        return "OOPS";
    };
    return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
