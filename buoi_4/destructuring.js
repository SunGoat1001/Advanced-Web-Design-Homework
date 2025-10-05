const arr = [1, 2, 3, 4, 5];

const sum1 = (a, b, ...c) => {
    let total = (a + b);

    arr.forEach(number => total += number);

    console.log("Method 1:", total);
}

const sum2 = (numbers) => {
    let total = 0;
    numbers.forEach(number => total += number);

    console.log("Method 2:", total)
}

sum1(1, 4, arr);
sum2(arr);