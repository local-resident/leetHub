/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const reverse = (start, end) => {
        let l = start, r = end
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l += 1
            r -= 1
        }
        return nums
    }
    const m = k % nums.length
    reverse(0, nums.length - 1)
    reverse(0, m-1)
    reverse(m, nums.length - 1)
};