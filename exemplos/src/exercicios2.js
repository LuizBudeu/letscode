import axios from 'axios';   //depois de adiocionar o 'type: modules' no package.JSON
//const axios = require('axios');

const funcaoQDemora = () => new Promise((res, rej) => {
    setTimeout(() => res(), 1000);
});

// PRIMEIRO JEITO
/* axios.get("http://www.google.com")
    .then((response) => {
        console.log(response.data);
        console.log("aqui");
        funcaoQDemora().
            then(() => {
                axios.get("http://www.google.com")
                    .then((response) => {
                        console.log(response.data);
                        console.log("aqui");
                        funcaoQDemora().
                            then(() => {
                                axios.get("http://www.google.com")
                                    .then((response) => {
                                        console.log(response.data);
                                        console.log("aqui");
                                    })
                                    .catch((objErro) => console.log(objErro.message))
                            })
                    })
                    .catch((objErro) => console.log(objErro.message))
            })
    .catch((objErro) => console.log(objErro.message)) 
    }) */


// SEGUNDO JEITO
const funcAxiosGet = () => {
    axios.get("http://www.google.com")
        .then((response) => {
            console.log(response.data);
            console.log("aqui")
        })
        .catch((objErro) => console.log(objErro.message))
}

const func = async () => {
    await funcaoQDemora();
    funcAxiosGet();

    await funcaoQDemora();
    funcAxiosGet();

    await funcaoQDemora();
    funcAxiosGet();
}


func();
