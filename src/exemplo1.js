
const a = "texto"

let b = 1
b = 4

let bool = false

function minhaFunc(arg1, arg2){
    //console.log(arg)
    //b = 5

    return arg1 + arg2;
}

const aMesmaFuncao = minhaFunc;

// O parênteses é pros argumentos, se a função for apenas o retorno de alguma coisa, dá pra fazer assim
const outraFuncao = (arg1, arg2) => arg1 + arg2;

// A linha acima é igual a:
//const outraFuncao = (arg1, arg2) => {
//    return arg1 + arg2;
//};

// Se for apenas um argumento pode tirar o parênteses (IDIOTA, NAO USAR)
//const outraFuncao2 = arg =>{
//    console.log(b)
//    b = 6
//};

console.log(minhaFunc(2, 3))
console.log(aMesmaFuncao(3, 4))
console.log(outraFuncao(5, 6))


console.log("oi" + 3)
console.log(true)
console.log(1 + true)


