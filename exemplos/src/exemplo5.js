class Animal {
    a = 3;

    constructor(name) {
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Human extends Animal{

}


const meuAnimal = new Animal("gato");

console.log(meuAnimal)

console.log(meuAnimal.getName());

