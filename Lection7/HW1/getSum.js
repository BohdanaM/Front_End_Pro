function getSum() {
    let count = 0;

    return function add(value) {
        count += value; 
        return count; 
    };
}

const sum = getSum();

console.log(sum(4)); 
console.log(sum(6)); 
console.log(sum(10)); 
console.log(sum(7));
