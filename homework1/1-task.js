function sum(n) {
    if (n < 0) {
        return 0;
    }
    let result = 0;
    for (let i = 3; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }
    return result;
}
const result = sum(1000);
console.log(result);
