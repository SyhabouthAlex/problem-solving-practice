function frequency(iterable) {
    let map = new Map;
    for(let i of iterable) {
        const exist = map.get(i);
        if (!exist) {
            map.set(i, 1);
        }
        else {
            map.set(i, exist + 1);
        }
    }
    return map;
}

module.exports = frequency;