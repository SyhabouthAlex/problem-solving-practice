// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
        const key = arr1[i];
        const value = arr2[i] || null;
        obj[key] = value;
    }
    return obj;
}

module.exports = twoArrayObject;