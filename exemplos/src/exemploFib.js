const fib = (n) => {
    let a1 = 0;
    let a2 = 1;
    let count = 0;

    if (n < 1){
        console.log("n tem q ser positivo");
    }

    else if (n === 1){
        console.log(1);
    }

    else {
        while (count < n){
            console.log(a1)
            let n_termo = a1 + a2;
            a1 = a2;
            a2 = n_termo;
            count++;
        }
    }
}

fib(6)




//PARA TESTAGEM DE IMPORT E EXPORT
const sum = (a, b) => a+b;

module.exports = {
    fib,
    //mesma coisa q acima
    //fib: fib,
    sum: sum
};
