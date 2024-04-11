const repeatString = function repeatStringFunc(str, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let finalStr = ''

        for (let i = 0; i < num; i++) {
            finalStr += str;
        }

        return finalStr;
    };
};

// Do not edit below this line
module.exports = repeatString;
