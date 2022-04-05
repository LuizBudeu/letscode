const obj = {
    nome: "Luiz",
    idade: 20
};

console.log(obj['nome'])

obj.animal = "gato";
obj.idade = 200;

console.log(obj)

obj.animal = undefined;

console.log(obj)

delete obj.animal;

console.log(obj)

let a = "oi"

function minhaFunc(a){
    console.log(a)
}

minhaFunc(a)
minhaFunc.coiso = "aaaaaaaa"
console.log(minhaFunc.coiso)