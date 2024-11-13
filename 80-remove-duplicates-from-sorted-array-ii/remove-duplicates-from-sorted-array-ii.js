/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let cnt = 0
    let map = new Map();
    const lens = nums.length
    for (let i=0; i<=lens - 1; i++) {
        if (nums[i] == '_') return lens - cnt
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
            if (map.get(nums[i]) >= 3) {
                nums.splice(i, 1)
                nums.push('_')
                cnt += 1
                i--
            }
        } else {
            map.set(nums[i], 1)
        }
    }
};