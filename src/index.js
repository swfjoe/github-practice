
console.log("It's alive!");

const fibo = () => {
    let first = 0;
    let second = 1;
    let sum = 0;

    for (let i = 0; i < 10; i++) {
        sum = first + second;
        console.log(sum);
        first = second;
        second = sum;
    }
}


console.log("It's alive!")


const computeTwoPlusTwo = () => {
    return 2 + 2;
}

console.log(computeTwoPlusTwo);