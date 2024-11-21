/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length, dx = [0, 1, 0 , -1], dy = [1, 0, -1, 0]
    let visited = Array(rows).fill().map(() => Array(cols).fill(0))
    let x = 0, y = 0, order = 0, ans = []
    for (let i = 0; i < rows * cols; i ++) {
        visited[x][y] = 1
        ans.push(matrix[x][y])
        nx = x + dx[order % 4], ny = y + dy[order % 4]
        if (nx < 0 || nx >= rows || ny < 0 || ny >= cols || visited[nx][ny] === 1) {
            order += 1
            nx = x + dx[order % 4], ny = y + dy[order % 4]
            x = nx , y = ny
        } else {
            x = nx , y = ny
        }
    }
    return ans
};