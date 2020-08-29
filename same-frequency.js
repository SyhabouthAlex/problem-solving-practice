const frequency = require("./frequency");
// add whatever parameters you deem necessary
function sameFrequency(n1, n2) {
    const s1 = String(n1);
    const s2 = String(n2);

    const m1 = frequency(s1);
    const m2 = frequency(s2);

    if (m1.size !== m2.size) return false;

    for (let key of m1.keys()) {
        const f1 = m1.get(key);
        const f2 = m2.get(key);

        if (f1 !== f2 || !f2) return false;
    };

    return true;
}

module.exports = sameFrequency;