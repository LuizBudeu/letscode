
let meuArray = [1, 4, 5, 3, 5, 6];

console.log(meuArray[0])

let i = 0;
while (i < 10){
    console.log("oi")
    i++;
}

for (let j = 0; j < 10; j++){
    console.log("ola")
}


for (i in meuArray){    //pega os indices
    console.log(i)   
}

for (i of meuArray){    //pega os valores
    console.log(i)   
}


const printaElemento = (elemento) => console.log(elemento);

meuArray
    .forEach((elemento) => console.log(elemento));

meuArray.forEach(printaElemento)     //mesma coisa doq acima



let meuNovoArray = meuArray.map((elemento) => elemento*2);
console.log(meuNovoArray)


let obj1 = null;
let obj2 = NaN;
let obj3 = undefined;
console.log(obj1);
console.log(obj2);
console.log(obj3);


