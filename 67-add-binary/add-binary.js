/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const decimalA = BigInt("0b" + a), decimalB = BigInt('0b' + b)
    const ans = (decimalA + decimalB).toString(2)
    return ans
};