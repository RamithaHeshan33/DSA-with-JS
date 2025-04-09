function sum(a,b,c) {
    return arguments;
}

console.log(sum(10, 20, 30)); // [Arguments] { '0': 10, '1': 20, '2': 30 }

const sum2 = (a, b, c) => {
    return arguments;
}

console.log(sum2(40, 50, 60)); // error