/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const J = nums.length - (k % nums.length)
    const arrJ = nums.slice(0, J), arrK = nums.slice(J)
    nums.splice(0, nums.length, ...arrK, ...arrJ)
};