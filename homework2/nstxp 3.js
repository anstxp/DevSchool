function group(words) {
    const groups = {};
    for (const word of words) {
        const sorted = word.split('').sort().join('');

        if (groups[sorted]) {
            groups[sorted].push(word);
        } else {
            groups[sorted] = [word];
        }
    }
    return Object.values(groups);
}
const input = ["tsar", "rat", "tar", "star", "tars", "cheese"];
const result = group(input);
console.log(result);

