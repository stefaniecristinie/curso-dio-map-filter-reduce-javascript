function somaNumeros(arr) {
    return arr.reduce(function (prev, current){ //previousValue (prev) = accumulator. currentValue (current).
        console.log({ prev }); //imprime 1.
        console.log({ current }); //imprime 2.
        return prev + current;
    }, 0); //com 0 --> prev = 0 e current = 1.
}

const arr = [1, 2];

console.log(somaNumeros(arr)); //imprime 3.