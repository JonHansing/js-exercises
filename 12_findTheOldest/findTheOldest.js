const findTheOldest = function(array) {
    return array.reduce((oldest, currentItem) => {
        let oldestAge = 0;
        if (oldest.yearOfDeath == undefined) {
            oldestAge = new Date().getFullYear() - oldest.yearOfBirth;
        } else (oldestAge = oldest.yearOfDeath - oldest.yearOfBirth);
        let currentAge = currentItem.yearOfDeath - currentItem.yearOfBirth;
        if (currentAge > oldestAge) return currentItem;
        else return oldest;
    }, array[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
