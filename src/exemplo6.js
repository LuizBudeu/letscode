//import {fib, sum} from "./exemploFib";

const funcs = require("./exemploFib");
//const {fib, sum} = require("./exemploFib");        da pra fazer assim tmb


const meuArray = [1, 2];
const [a, b] = meuArray;

const obj = {
    a2: 1,
    b2: 2,
};

const {a2, b2} = obj;   // tem q ser o mesmo nome do obj

console.log(funcs.fib())
console.log(funcs.sum(a2, b2))





