// PRIMEIRO JEITO
/* const funcaoQDemora = (callback) => {
    setTimeout(() => callback(), 5000);
}; */

/* const funcaoQDemora = new Promise((callback) => {
    setTimeout(() => callback(), 5000);
});

const funcaoQDemora2 = (callback) => {
    setTimeout(() => callback(), 5000);
};

const meuCallBack = () => {
    console.log("processamento terminou");
}; */

// callback hell
/* funcaoQDemora(() => {
    meuCallBack();
    funcaoQDemora2(meuCallBack);
}); */


// SEGUNDO JEITO
/* const funcaoQDemora = () => new Promise((res, rej) => {
    setTimeout(() => res(), 5000);
}); */

/* const funcaoQDemora2 = () => new Promise((res, rej) => {
    setTimeout(() => rej(), 5000);
}); */

/* 
funcaoQDemora()
    .then(() => {
        console.log("1 deu certo")

        funcaoQDemora2()
        .then(() => console.log("2 processamento terminou"))
        .catch(() => console.log("2 deu ruim"));
    })
    .catch(() => console.log("1 deu ruim"));
 */

// TERCEIRO JEITO 
const conectaComMeuBanco = () => new Promise((res, rej) => {
    setTimeout(() => res(), 5000);
});

const funcaoQDemora2 = async () => {   // outro jeito: async func nomedafuncao(){}
    await conectaComMeuBanco();
    console.log("conectado");
    return 1;
};

funcaoQDemora2();
conectaComMeuBanco();


