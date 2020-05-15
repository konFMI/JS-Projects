function vector() {

    return {
        add: (vec1, vec2) => {
            if (vec1.length === vec2.length) {
                return [vec1[0] + vec2[0], vec1[1] + vec2[1]]
            } else {
                return [];
            }
        },
        multiply: (vec1, scalar) => {
            if (vec1.length === 2) {
                return [vec1[0] * scalar, vec1[1] * scalar]
            } else {
                return [];
            }
        },
        length: (vec1) => {
            if (vec1.length === 2) {
                return Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2));
            } else {
                return [];
            }
        },
        dot: (vec1, vec2) => {
            if (vec1.length === vec2.length) {
                return vec1[0] * vec2[0] + vec1[1] * vec2[1];
            } else {
                return [];
            }
        },
        cross: (vec1, vec2) => {
            if (vec1.length === vec2.length) {
                return vec1[0] * vec2[1] - vec1[1] * vec2[0];
            } else {
                return [];
            }
        }
    }
};
const solution = vector();
console.log(solution.add([1, 2], [1, 2]));
console.log(solution.multiply([2], 2));
console.log(solution.length([1, 2]))
console.log(solution.dot([1, 0], [0, -1]));