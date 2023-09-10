// hacer la tabla del 5 en javascrip
// const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
// const { resolve } = require('path');
// const crearArchivo = async (j = 5) => {
//     try{
//         console.log('=============');
//         console.log('Tabla del: ',j);
//         console.log('=============');
//         let salida = '';
//         for(i = 1;i<=10;i++){
//             salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de  linea.
//         }
//         console.log(salida);
//         //el file system para grabar un archivo. usando WriteFileSync
//         //cono se ejecuta de manera asincrona ya no va el error.
//         //Para controlar el error se usa try - catch.
//         fs.writeFileSync(`tabla-del-${j}.txt` , salida);
//         return `Tabla del ${j}`;
//     }catch (err) {
//         throw err;
//     }
// }

const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async (j = 5, listar = true, hasta = 10) => {
    try{
        let salida = '';
        let consola = '';
        for(i = 1;i<=hasta;i++){
            salida += `${j} ${'x'} ${i} ${'='} ${j * i}\n`; //la salida se concatena y se da un salto de  linea.
            consola += `${j} ${'x'.green} ${i} ${'='.green} ${j * i}\n`;
        }
        if(listar){
            console.log('============='.green);
            console.log('Tabla del: ', colors.blue(j));
            console.log('============='.blue);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-del-${j}.txt` , salida);
        return `Tabla del ${j}`;
    }catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
}