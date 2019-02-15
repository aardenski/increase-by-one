function increaseByOne(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[array.length - i - 1] !== 9) {
            array[array.length - i - 1]++;
            break;
        }
        else {
            count++;
            array[array.length - i - 1] = 0;
        }
    }
    count === array.length ? array.unshift(1) : {};
    console.log(array);
}

increaseByOne([9, 0, 9, 0]) // [9, 0, 9, 1]
increaseByOne([9, 0, 9, 9]) // [9, 1, 0, 0]
increaseByOne([9, 9, 9, 9]) // [1, 0, 0, 0, 0]




