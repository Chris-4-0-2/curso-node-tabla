const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors')

// const base = 3;

// const [ , ,arg3 =  'base=5'] = process.argv;
// const [ ,base = 5] = arg3.split('=');


crearArchivo(argv.b, argv.l, argv.h)
    .then(fn => console.log(fn.rainbow,` creado`))
    .catch(console.log)