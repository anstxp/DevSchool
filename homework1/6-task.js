function descendingOrder(n) {
    const numStr = n.toString();
    const digits = numStr.split('').map(Number);
    for (let i = 0; i < digits.length - 1; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            if (digits[i] < digits[j]) {
                const temp = digits[i];
                digits[i] = digits[j];
                digits[j] = temp;
            }
        }
    }
    const highestNumber = parseInt(digits.join(''), 10);
    return highestNumber;
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));