// add whatever parameters you deem necessary
function averagePair(nums, avg) {
    if (nums.length < 2) return false;
    let left = 0;
    let right = nums.length - 1;

    while (left !== right) {
        const currentAvg = nums[left] + nums[right] / 2;
        if (currentAvg === avg) {
            return true;
        }
        else if (currentAvg < avg) {
            left++;
        }
        else if (currentAvg > avg) {
            right--;
        }
    };

    return false;
}

module.exports = averagePair;
