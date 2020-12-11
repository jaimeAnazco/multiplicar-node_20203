const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//let base = '3';


let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo} `))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no Reconocido');

        break;
}




let argv2 = process.argv;



// console.log(argv);

//console.log(argv.base);
//console.log('Limite: ', argv.limite);
//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(base);

//multiplicar.crearArchivo

//console.log(process.argv);
//console.log(multiplicar);
//console.log(module);