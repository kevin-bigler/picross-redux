/**
 * usage:
 * - random(max) // 0 to max, exclusive
 * - random(min, max) // min to max, exclusive
 */
const random = (...args) => {
    if (args.length === 2) {
        const [ min, max ] = args;
        return Math.random() * (max - min) + min;
    } else if (args.length == 1) {
        const [ max ] = args;
        return Math.random() * max;
    }
};

/**
 * return an array of integers from a to b, exclusive
 * a and b are floor'd to ensure they are integers
 * 
 * usage:
 * - range(10, 15) // [10, 11, 12, 13, 14]
 * - range(15, 10) // [15, 14, 13, 12, 11]
 * - range(5) // [0, 1, 2, 3, 4]
 * - range(-5) // [0, -1, -2, -3, -4]
 */
const range = (a, b) => {
    let r = [];
    if (a < b) {
        for (let i = Math.floor(a); i < Math.floor(b); i++) {
            r.push(i);
        }
    } else {
        for (let i = Math.floor(a); i > Math.floor(b); i--) {
            r.push(i);
        }
    }
    return r;
}

range(0, 50).forEach(i =>
    console.log(Math.floor(random(10, 15)))
);

