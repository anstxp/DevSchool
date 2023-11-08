function highAndLow(numbers) {
    const numberArray = numbers.split(" ").map(Number);
    const highest = Math.max(...numberArray);
    const lowest = Math.min(...numberArray);
    return `${highest} ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));