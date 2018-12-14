const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Que quieres hacer',
    choices: [
        'Crear',
        'Borrar',
        'Buscar',
        'Actualizar',
        'Agregar Facultad'
    ]
};
const preguntaBuscarUsuario = [
    {
        type: 'input',
        name: 'idUsuario',
        message: 'Ingrese ID Usuario',
    }
];
const preguntaUsuario = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es tu id'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es tu nombre'
    },
    {
        type: 'input',
        name: 'apellido',
        message: 'Cual es tu apellido'
    },
    {
        type: 'input',
        name: 'idFacu',
        message: 'Cual es el id de tu facu'
    },
];
const preguntaFacu = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es el id de la facultad'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es el nombre de la facultad'
    },
];
const preguntaEdicionUsuario = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es el nuevo nombre'
    },
    {
        type: 'input',
        name: 'apellido',
        message: 'Cual es el nuevo apellido'
    },
];
function inicialiarBDD() {
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                fs.writeFile('bdd.json', '{"usuarios":[],"facultades":[]}', (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error creando',
                            error: 500
                        });
                    }
                    else {
                        resolve({
                            mensaje: 'BDD leida',
                            bdd: JSON.parse('{"usuarios":[],"facultades":[]}')
                        });
                    }
                });
            }
            else {
                resolve({
                    mensaje: 'BDD leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
async function main() {
    // 1) Inicializar bdd -- DONE
    // 2) Preguntas Menu -- DONE
    // 3) Opciones de Respuesta --  DONE
    // 4) ACCCION!!!!  -- DONE
    // 5) Guardar BDD --
    // of(Cualquier cosa JS)
    // from(Promesas)
    const respuestaBDD$ = rxjs.from(inicialiarBDD());
    respuestaBDD$
        .pipe(preguntarOpcionesMenu(), opcionesRespuesta(), ejecutarAcccion(), guardarBaseDeDatos())
        .subscribe((data) => {
        //
        console.log(data);
    }, (error) => {
        //
        console.log(error);
    }, () => {
        main();
        console.log('Complete');
    });
}
function guardarBDD(bdd) {
    return new Promise((resolve, reject) => {
        fs.writeFile('bdd.json', JSON.stringify(bdd), (error) => {
            if (error) {
                reject({
                    mensaje: 'Error creando',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD guardada',
                    bdd: bdd
                });
            }
        });
    });
}
main();
function preguntarOpcionesMenu() {
    return mergeMap(// Respuesta Anterior Observable
    (respuestaBDD) => {
        return rxjs
            .from(inquirer.prompt(preguntaMenu))
            .pipe(map(// respuesta ant obs
        (respuesta) => {
            respuestaBDD.opcionMenu = respuesta;
            return respuestaBDD;
        }));
    });
}
function opcionesRespuesta() {
    return mergeMap((respuestaBDD) => {
        const opcion = respuestaBDD.opcionMenu.opcionMenu;
        switch (opcion) {
            case 'Crear':
                return rxjs
                    .from(inquirer.prompt(preguntaUsuario))
                    .pipe(mergeMap((respuesta) => {
                    const indiceFacu = respuestaBDD.bdd
                        .facultades
                        .findIndex((facultad) => {
                        return facultad.id === respuesta.idFacu;
                    });
                    console.log('indice' + indiceFacu);
                    if (indiceFacu === -1) {
                        console.log("No existe esa facu, preguntando de nuevo");
                        return rxjs
                            .from(inquirer.prompt(preguntaUsuario));
                    }
                    else {
                        return rxjs.from(promesaCrear(respuesta))
                            .pipe(map((usuario) => {
                            respuestaBDD.usuario = usuario;
                            return respuestaBDD;
                        }));
                    }
                }));
            case 'Buscar':
                return buscarUsuario(respuestaBDD);
                break;
            case 'Actualizar':
                return preguntarIdUsuario(respuestaBDD);
            case 'Borrar':
                return borrarUsuario(respuestaBDD);
                break;
            case 'Agregar Facultad':
                return rxjs
                    .from(inquirer.prompt(preguntaFacu))
                    .pipe(map((facultad) => {
                    respuestaBDD.facultad = facultad;
                    return respuestaBDD;
                }));
        }
    });
}
function guardarBaseDeDatos() {
    return mergeMap(// Respuesta del anterior OBS
    (respuestaBDD) => {
        // OBS
        return rxjs.from(guardarBDD(respuestaBDD.bdd));
    });
}
function ejecutarAcccion() {
    return map(// Respuesta del anterior OBS
    (respuestaBDD) => {
        const opcion = respuestaBDD.opcionMenu.opcionMenu;
        switch (opcion) {
            case 'Crear':
                const usuario = respuestaBDD.usuario;
                respuestaBDD.bdd.usuarios.push(usuario);
                return respuestaBDD;
            case 'Actualizar':
                const indice = respuestaBDD.indiceUsuario;
                respuestaBDD.bdd.usuarios[indice].nombre = respuestaBDD.usuario.nombre;
                respuestaBDD.bdd.usuarios[indice].apellido = respuestaBDD.usuario.apellido;
                return respuestaBDD;
            case 'Borrar':
                return respuestaBDD;
            case 'Buscar':
                return respuestaBDD;
            case 'Agregar Facultad':
                const facu = respuestaBDD.facultad;
                respuestaBDD.bdd.facultades.push(facu);
                return respuestaBDD;
        }
    });
}
function preguntarIdUsuario(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarUsuario))
        .pipe(mergeMap(// RESP ANT OBS
    (respuesta) => {
        const indiceUsuario = respuestaBDD.bdd
            .usuarios
            .findIndex(// -1
        (usuario) => {
            return usuario.id === respuesta.idUsuario;
        });
        if (indiceUsuario === -1) {
            console.log('preguntando de nuevo');
            return preguntarIdUsuario(respuestaBDD);
        }
        else {
            console.log(indiceUsuario);
            respuestaBDD.indiceUsuario = indiceUsuario;
            return rxjs
                .from(inquirer.prompt(preguntaEdicionUsuario))
                .pipe(map((nombre) => {
                respuestaBDD.usuario = {
                    id: null,
                    nombre: nombre.nombre,
                    apellido: nombre.apellido
                };
                return respuestaBDD;
            }));
        }
    }));
}
function borrarUsuario(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarUsuario))
        .pipe(mergeMap(// RESP ANT OBS
    (respuesta) => {
        const indiceUsuario = respuestaBDD.bdd
            .usuarios
            .findIndex(// -1
        (usuario) => {
            return usuario.id === respuesta.idUsuario;
        });
        if (indiceUsuario === -1) {
            console.log('preguntando de nuevo');
            return preguntarIdUsuario(respuestaBDD);
        }
        else {
            console.log(indiceUsuario);
            return rxjs.from(promesaEliminar(respuestaBDD.bdd.usuarios, indiceUsuario))
                .pipe(map(() => {
                return respuestaBDD;
            }));
        }
    }));
}
const promesaEliminar = (respuestaBDD, indiceUsuario) => {
    return new Promise((resolve, reject) => {
        resolve(respuestaBDD.splice(indiceUsuario, 1));
        //  respuestaBDD.splice(indiceUsuario, 1)
        //  console.log(respuestaBDD.splice(indiceUsuario, 1))
    });
};
function buscarUsuario(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarUsuario))
        .pipe(mergeMap(// RESP ANT OBS
    (respuesta) => {
        const indiceUsuario = respuestaBDD.bdd
            .usuarios
            .findIndex(// -1
        (usuario) => {
            return usuario.id === respuesta.idUsuario;
        });
        if (indiceUsuario === -1) {
            console.log('preguntando de nuevo');
            return preguntarIdUsuario(respuestaBDD);
        }
        else {
            console.log(indiceUsuario);
            return rxjs.from(promesaBuscar(respuestaBDD.bdd.usuarios[indiceUsuario]))
                .pipe(map(() => {
                return respuestaBDD;
            }));
        }
    }));
}
const promesaBuscar = (respuestaBDD) => {
    return new Promise((resolve, reject) => {
        resolve(console.log(respuestaBDD));
    });
};
const promesaCrear = (respuestaBDD) => {
    console.log(JSON.stringify(respuestaBDD));
    return new Promise((resolve, reject) => {
        resolve(respuestaBDD);
    });
};
