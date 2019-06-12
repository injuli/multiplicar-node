// requireds
const fs = require('fs');
var colors = require('colors');
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        // if (!Number(base) && !Number(limite)) {
        //     reject(`El valor introducido ${base} y ${limite}, no son un número.`);
        //     return;
        // }
        let da;
        let ac;
        console.log('===================='.green);
        console.log(`=====tabla de ${base}=====`.green);
        console.log('===================='.green);
        for (let i = 1; i <= limite; i++) {
            ac = base * i;
            console.log(`${base} * ${i} = ${ac}`);
        }

    });

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject(`El valor introducido ${base} y ${limite}, no son un número.`);
            return;
        }
        let dato = '';
        let acum;
        for (let i = 1; i <= limite; i++) {
            acum = base * i;
            dato += `${base} * ${i} = ${acum}\n`;
        }


        const data = new Uint8Array(Buffer.from(dato));
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}