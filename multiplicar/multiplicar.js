const fs = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {

  console.log('==============='.green);
  console.log(`= Tabla del ${ base } =`.green);
  console.log('==============='.green);

  for (var i = 1; i <= limite; ++i) 
    console.log(`${base} * ${i} = ${base * i}`);

}

let crearArchivo = (base, limite = 10) => {

  return new Promise((resolve, reject) => {

    if (!Number(base)){

      reject(`El valor introducido \"${base}\" no es un número.`);
      return;

    }

    let data = '', file = `tabla_${base}_al_${limite}.txt`;

    for (let i = 1; i <= limite; ++i)
      data += `${base} * ${i} = ${i * base}\n`;
  
    fs.writeFile(`./tablas/${file}`, data, e => {
      if (e) 
        reject(err);
      else
        resolve(file);
    });
  });
}

module.exports = {
  crearArchivo,
  listar
}