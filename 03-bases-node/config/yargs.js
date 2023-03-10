const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type:'number',
                    default: 5,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .check( ( argv, option )=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .option('h',{
                    alias: 'hasta',
                    type:'number',
                    default: 10,
                    describe: 'Es el tope de la tabla de multiplicar'
                })
                .check( ( argv, option )=>{
                    if(isNaN(argv.h)){
                        throw 'El tope tiene que ser un numero'
                    }
                    return true;
                })
                .option('l',{
                    alias: 'listar',
                    type:'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .argv;

module.exports = argv;