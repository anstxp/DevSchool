function find(arr) {
    for (let i = 0; i < arr.length; i++) {
        const leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
        const rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);

        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}
console.log(find([1, 2, 3, 4, 3, 2, 1]));
console.log(find([1, 100, 50, -51, 1, 1]));
console.log(find([20, 10, -80, 10, 10, 15, 35]));
