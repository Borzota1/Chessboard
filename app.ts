const number: number = 8;

for (let i = 0; i < number; i++) {
    let counter = ''
    for (let j = 0; j < number; j++) {
        if ((i + j) % 2 === 0) {
            counter += '⬜'
        } else {
            counter += '⬛'
        }
    }

    console.log(counter)
}

console.log("HELLO");