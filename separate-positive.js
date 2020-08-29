// add whatever parameters you deem necessary
function separatePositive(nums) {
    let i = 0;
    let j = nums.length - 1;
    const even = nums.length % 2 === 0;
    const mid = even ? Math.floor(nums.length / 2) - 1 : Math.floor(nums.length / 2);
    
    while (i <= mid && j > mid) {
        if (nums[i] < 0 && nums[j] >= 0) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
        else {
            if (nums[i] >= 0) {
                i++;
            }
            if (nums[j] < 0) {
                j--;
            }
        }
    }
    return nums;
}

module.exports = separatePositive;