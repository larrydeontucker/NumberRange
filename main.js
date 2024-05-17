function range(start, end) {
    let numbers = [start];

    for(let step = 0; step <= end; step++) {
        let next = numbers[step] + 1;
        numbers.push(next);

        if(next == end) {
            break;
        }
    }

    return numbers;
}

console.log(range(1, 5));
console.log(range(-5, -1));

