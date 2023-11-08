function perimeter(grid) {
    if (!grid || grid.length === 0) {
        return "Total land perimeter: 0";
    }
    const rows = grid.length;
    const cols = grid[0].length;
    let totalPerimeter = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'X') {
                totalPerimeter += 4;
                if (i > 0 && grid[i - 1][j] === 'X') {
                    totalPerimeter -= 2;
                }
                if (j > 0 && grid[i][j - 1] === 'X') {
                    totalPerimeter -= 2;
                }
            }
        }
    }
    return "Total land perimeter: " + totalPerimeter;
}

const grid1 = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
];

const grid2 = [
    'XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'
];

console.log(perimeter(grid1));
console.log(perimeter(grid2));
