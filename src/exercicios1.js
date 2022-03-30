// PRIMEIRO JEITO
const funcaoQDemora = (callback) => {
    setTimeout(() => callback(), 1000);
};

const funcaoQDemora2 = (callback) => {
    setTimeout(() => callback(), 2000);
};

const funcaoQDemora3 = (callback) => {
    setTimeout(() => callback(), 3000);
};

const meuCallBack = () => {
    console.log("processamento terminou");
};

// callback hell
funcaoQDemora(() => {
    meuCallBack();
    funcaoQDemora2(() => {
        meuCallBack();
        funcaoQDemora3(meuCallBack);
    });
});


//SEGUNDO JEITO
/* const funcaoQDemora = () => new Promise((res, rej) => {
    setTimeout(() => res(), 1000);
});

const funcaoQDemora2 = () => new Promise((res, rej) => {
    setTimeout(() => res(), 2000);
});

const funcaoQDemora3 = () => new Promise((res, rej) => {
    setTimeout(() => res(), 3000);
});


funcaoQDemora()
    .then(() => {
        console.log("1 deu certo")
        funcaoQDemora2()
        .then(() => {
            console.log("2 deu certo")
            funcaoQDemora3()
                .then(() => console.log("3 de certo"))
                .catch(() => console.log("3 deu ruim"))
        })
        .catch(() => console.log("2 deu ruim"));
    })
    .catch(() => console.log("1 deu ruim")); */


// TERCEIRO JEITO
/* const conectaComMeuBanco = () => new Promise((res, rej) => {
    setTimeout(() => res(), 1000);
});

const conectaComMeuBanco2 = () => new Promise((res, rej) => {
    setTimeout(() => res(), 2000);
});

const conectaComMeuBanco3 = () => new Promise((res, rej) => {
    setTimeout(() => res(), 3000);
});


const funcaoQDemora2 = async () => {   // outro jeito: async func nomedafuncao(){}
    await conectaComMeuBanco();
    console.log("conectado 1");
    await conectaComMeuBanco2();
    console.log("conectado 2");
    await conectaComMeuBanco3();
    console.log("conectado 3");
};

funcaoQDemora2(); */
//conectaComMeuBanco();



