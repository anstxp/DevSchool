function get(obj, targetValue) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (Array.isArray(value) && value.includes(targetValue)) {
                return key;
            } else if (typeof value === 'object') {
                const result = get(value, targetValue);
                if (result !== null) {
                    return key;
                }
            }
        }
    }
    return null;
}

const object = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
};

console.log(get(object, 9));
console.log(get(object, 92));
console.log(get(object, 100));
console.log(get(object, 999));



