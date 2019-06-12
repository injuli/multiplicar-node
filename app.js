// requireds
// const fs = require('fs');

const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado:`, colors.green(archivo));
        }).catch(e => {
            console.log(e);
        });
        break;

    default:
        console.log('Comando no reconocido.');



}


// let base = '5';

// console.log(process.argv);
// let argv2 = process.argv;
// console.log('Limite', argv.base);
// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);

// let dato = '';
// let acum;
// for (let i = 1; i <= 10; i++) {
//     acum = base * i;
//     dato += `${base} * ${i} = ${acum}\n`;
// }

// const data = new Uint8Array(Buffer.from(dato));
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('El archivo tabla-2.txt ha sido creado.');
// });

// crearArchivo(base).then(archivo => {
//     console.log(`Archivo creado: ${archivo}`);
// }).catch(e => {
//     console.log(e);
// });