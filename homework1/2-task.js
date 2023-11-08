function moves(n) {
    if (n === 0) {
        return 0;
    }
    return Math.pow(2, n) - 1;
}

const numberOfDisks = 3;
const minimumMoves = moves(numberOfDisks);
console.log(`Minimum moves to solve the puzzle with ${numberOfDisks} disks: ${minimumMoves}`);
