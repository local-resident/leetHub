/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const sorted = citations.sort((a, b) => a - b)
    let ans = 0, lens = citations.length
    for (let i=0; i<lens; i++) {
        if (citations[i] >= lens-i) return lens-i
    }
    return 0

};