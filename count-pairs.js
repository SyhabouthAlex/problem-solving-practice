// add whatever parameters you deem necessary
function countPairs(nums, num) {
    const set = new Set(nums);
    let seen = new Set();
    let pairs = 0;
    set.forEach(v => {
        if (!seen.has(v) && set.has(num - v) && num - v !== v) {
            pairs++;
            seen.add(num - v);
        }
    });
    return pairs;
}

module.exports = countPairs;
