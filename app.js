// #!/usr/bin/env node
const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando){
  case 'listar':
    listar(argv.base, argv.limite);
    break;

  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo crado: ` + `${ archivo }`.green))
      .catch(e => console.log(`[Error] ${ e }`));
    break;

  default: 
    console.log('Comando no reconocido');
    break;
}