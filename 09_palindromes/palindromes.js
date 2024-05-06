const palindromes = function (str) {
    let newStr = str
        .toLowerCase()
        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s+]/g, "");
    let reverseStr = newStr
        .split("")
        .reverse()
        .join("");
    return newStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
