const inquirer = require('inquirer');
const rxjs = require('rxjs');
const { Observable } = require('rxjs');
const fs   = require('fs');
const path = require('path');

const observe = Observable.create(function(obs) {
    obs.next({
        type: 'list',
        name: 'accion',
        message: 'Acción a realizar',
        choices: [ 'crear', 'actualizar', 'eliminar','leer'  ],
    });
    obs.next({
        type: 'input',
        name: 'facultad',
        message: "cual es la facultad"

    });
    obs.next({
        type: 'input',
        name: 'cedula',
        message: "cual es el numero de cedula",

    });
    obs.next({
        type: 'input',
        name: 'nombre',
        message: "cual es el nombre",

    });
    obs.next({
        type: 'input',
        name: 'apellido',
        message: "cual es el apellido",

    });


    obs.complete();
});

inquirer.prompt(observe).
then(answers => {


    if (answers.accion == 'crear'){
        mkdirpath(`${answers.facultad}`);

        const promesaEscritura$ = rxjs.from(promesaEscritura(`${answers.facultad}/${answers.cedula}`, JSON.stringify(answers, null, '  ') ));
        promesaEscritura$
            .subscribe((ok) => {
                console.log('Creación Exitosa', ok);
            }, (error) => {
                console.log('Creación Fallida', error);
            }, () => {
                console.log('completado');

            });

    }
    else if (answers.accion == 'actualizar'){

        const respuestasJSON = JSON.stringify(answers, null, '  ');

        const promesaActualizar$ = rxjs.from(promesaActualizar(`${answers.facultad}/${answers.cedula}`, respuestasJSON));
        promesaActualizar$
            .subscribe((ok) => {
                console.log('Actualización Exitosa', ok);

            }, (error) => {
                console.log('Actualización Fallida', error);
            }, () => {
                console.log('completado');

            });
    }
    else if (answers.accion == 'leer'){
        const respuestasJSON = JSON.stringify(answers, null, '  ');

        const promesaLectura$ = rxjs.from(promesaLectura(`${answers.facultad}/${answers.cedula}`, respuestasJSON));
        promesaLectura$
            .subscribe((ok) => {
                console.log('Lectura Exitosa', ok);

            }, (error) => {
                console.log('LEctura Fallida', error);
            }, () => {
                console.log('completado');

            });

    }
    else if (answers.accion == 'eliminar'){
        const respuestasJSON = JSON.stringify(answers, null, '  ');

        const promesaEliminar$ = rxjs.from(promesaEliminar(`${answers.facultad}/${answers.cedula}`));
        promesaEliminar$
            .subscribe((ok) => {
                console.log('Eliminación Exitosa', ok);

            }, (error) => {
                console.log('Eliminación Fallida', error);
            }, () => {
                console.log('completado');
            });
    }



});


function mkdirpath(dirPath)
{
    if(!fs.existsSync(dirPath))
    {
        try
        {
            fs.mkdirSync(dirPath);
        }
        catch(e)
        {
            mkdirpath(path.dirname(dirPath));
            mkdirpath(dirPath);
        }
    }
}
const promesaEscritura = (nombreArchivo,
                          contenidoArchivo) =>{
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,contenidoArchivo,
                (error)=>{
                    if(error){
                        reject(error)
                    }
                    else {
                        resolve(contenidoArchivo)
                    }
                }
            );
        }
    )};
const promesaActualizar = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (error, contenidoLeidoDelArchivo) => {
                    if (error) {
                        console.log("El archivo no existe, no se puede actualizar");
                        reject(error)
                    } else {
                        var f = new Date();
                        fs.writeFile(
                            nombreArchivo,
                            contenidoArchivo + 'actualizado el: ' +f.getDate() ,
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    // Devolver el contenido
                                    var f = new Date();
                                    resolve(contenidoArchivo )
                                }
                            }
                        )
                    }
                }
            );
        }
    )

};

const promesaLectura = (nombreArchivo) =>{
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,'utf-8',
                (error, contenidoArchivo)=>{
                    if(error){
                        reject(error)
                    }
                    else {
                        resolve(contenidoArchivo)
                    }
                }
            );
        }
    )};
const promesaEliminar = (nombreArchivo) =>{
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                (error)=>{
                    if(error){
                        reject(error)
                        console.log("el archivo no existe no se puede eliminar")
                    }
                    else {
                        resolve(fs.unlinkSync(nombreArchivo))
                    }
                }
            );
        }
    )};