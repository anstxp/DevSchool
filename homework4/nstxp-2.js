let Vector = function (components) {
    this.components = components;
};

Vector.prototype.add = function (vector) {
    if (this.components.length !== vector.components.length) {
        throw new Error('Vector lengths do not match for addition.');
    }

    let result = this.components.map(function (value, index) {
        return value + vector.components[index];
    });
    return new Vector(result);
};

Vector.prototype.subtract = function (vector) {
    if (this.components.length !== vector.components.length) {
        throw new Error('Vector lengths do not match for subtraction.');
    }

    let result = this.components.map(function (value, index) {
        return value - vector.components[index];
    });
    return new Vector(result);
};

Vector.prototype.dot = function (vector) {
    if (this.components.length !== vector.components.length) {
        throw new Error('Vector lengths do not match for dot product.');
    }

    return this.components.reduce(function (acc, value, index) {
        return acc + value * vector.components[index];
    }, 0);
};

Vector.prototype.norm = function () {
    let normSquared = this.components.reduce(function (acc, value) {
        return acc + value * value;
    }, 0);
    return Math.sqrt(normSquared);
};

Vector.prototype.toString = function () {
    return '(' + this.components.join(',') + ')';
};

Vector.prototype.equals = function (vector) {
    if (this.components.length !== vector.components.length) {
        return false;
    }

    for (let i = 0; i < this.components.length; i++) {
        if (this.components[i] !== vector.components[i]) {
            return false;
        }
    }

    return true;
};
