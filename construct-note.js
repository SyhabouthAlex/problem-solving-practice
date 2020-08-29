const frequency = require("./frequency")
// add whatever parameters you deem necessary
function constructNote(s1, s2) {
    const mapS1 = frequency(s1);
    const mapS2 = frequency(s2);

    for (let key of mapS1.keys()) {
        const freq1 = mapS1.get(key);
        const freq2 = mapS2.get(key);

        if (freq2 < freq1 || !freq2) {
            return false;
        };
    }
    return true;
}

module.exports = constructNote;