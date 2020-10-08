function findNumberIn2DArray(matrix: number[][], target: number): boolean {
    if(matrix.length === 0) {
        return false
    }
    let y:number = 0, x:number = matrix[0].length - 1
    while(y < matrix.length && x >= 0){
        if (matrix[y][x] === target) {
            return true
        } else if (matrix[y][x] > target) {
            x--
        } else {
            y++
        }
    }
    return false
};