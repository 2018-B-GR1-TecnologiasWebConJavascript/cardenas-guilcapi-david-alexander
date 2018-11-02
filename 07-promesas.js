// 07-promesas.js
const fs = require('fs');
const nombre = '06-ejemplo.txt';
const nuevaPromesa = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (err, contenidoLeidoDelArchivo) => {
                    if (err) {
                        reject(err);
                        console.log('err')
                    } else {
                        resolve(contenidoLeidoDelArchivo);
                        console.log('si')
                    }

                }
            )
        }
    )
};

const nuevaPromesaEscritura = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenidoArchivo);
                    }

                }
            )
        }
    )
};

nuevaPromesa(nombre)
    .then(
        (contenido) => {
            console.log(contenido);
            return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + 'Adios amigos');
        }
    )
    .then(
        (contenidoArchivoEscrito) => {
            console.log(contenidoArchivoEscrito);
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );



const appendFile = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (error, contenidoLeidoDelArchivo) => {
                    if (error) {
                        fs.writeFile(
                            nombreArchivo,
                            contenidoLeidoDelArchivo,
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    // Devolver el contenido
                                    resolve(contenidoLeidoDelArchivo)
                                }
                            }
                        );
                    } else {
                        fs.writeFile(
                            nombreArchivo,
                            contenidoLeidoDelArchivo,
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    // Devolver el contenido
                                    resolve(contenidoLeidoDelArchivo + 'nuevo contenido')
                                }
                            }
                        )
                    }
                }
            );
        }
    )

}


appendFile('08-texto.txt', 'nuevoContenido' )
    .then(
        (contenido) => {
            console.log(contenido);
            return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + 'Adios amigos');
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );



const ejercicio = (arreglo) =>{
    const arregloRespuestas = [];
    return new Promise ((resolve, reject )=>{
        arreglo.forEach(
            (string, indice)=>{
                const nombreArchivo = `${indice}-${string}.txt`;
                const contenidoArchivo = string;
                fs.writeFile(nombreArchivo, contenidoArchivo, (err)=>{

                    if(err){
                        reject(err)
                    }
                    else{
                        const respuesta = {
                            nombreArchivo:nombreArchivo,
                            contenidoArchivo:contenidoArchivo,
                            error:err

                        };
                        arregloRespuestas.push(respuesta);
                        resolve(arregloRespuestas)
                    }

                })
            });

    })

}



ejercicio( ['h','i','j','k'])
    .then(
        (arregloRespuestas) => {
            console.log(arregloRespuestas);
            return ejercicio(['h','i','j','k']);
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );