//REQUIREDS

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise ((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introcido en la base "${base}" no es un número.`);
            return;
        } else if(!Number(limite)){
            reject(`El valor introducido en el límite "${limite}" no es un número`);
            return;
        }

        console.log('======================='.green);
        console.log(`====| tabla del ${base} |====`.green);
        console.log('======================='.green);

        let lista = '';
        for (let u = 1; u <= limite; u++) {
            lista += `${base} * ${u} = ${base * u}\n`;
        }
        resolve(lista)
    })
}

let crearArchivo = (base, limite) => {
    return new Promise ((resolve, reject) => {

        if( !Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        
        let contenido = '';
        
        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, (err) => {
          if (err) reject(err)
          else
            resolve(colors.brightYellow(`tabla-${base}-al-${limite}.txt`))
        });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}

