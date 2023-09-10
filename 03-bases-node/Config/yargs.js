const argv = require('yargs')
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: 10,
        describe: 'Indicador del alcance del Multiplicar'

    })
    .check((argv, options ) => {
        if(isNaN(argv.h)){
            throw 'El multiplicador debe ser un Numero'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
        
    })
    .argv;
    module.exports = argv;