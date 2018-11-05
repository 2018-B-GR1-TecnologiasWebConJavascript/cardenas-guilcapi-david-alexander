const fs = require('fs');

function appendFile(nombreArchivo, contenido, callback) {
    // 1) Leer archivo
    // 2.1) Si existe, le anado el contenido al contenido
    //      del archivo
    // 2.2) Si no existe, le creo al archivo con el contenido

    // **Devuelvan el contenido completo del archivo**
    fs.readFile(
        nombreArchivo,
        'utf-8',
        (error, contenidoLeidoDelArchivo) => {
            if (error) {
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err) => {
                        if (err) {
                            callback(undefined, err)
                        } else {
                            // Devolver el contenido
                            callback(contenido);
                        }
                    }
                );
            } else {

                fs.writeFile(
                    nombreArchivo,
                    contenidoLeidoDelArchivo + contenido,
                    (err) => {
                        if (err) {
                            callback(undefined, err);
                        } else {
                            // Devolver el contenido
                            callback(contenidoLeidoDelArchivo + contenido)
                        }
                    }
                )
            }
        }
    );
}

appendFile(
    '06-texto.txt',
    '\nHola amigos',
    (contenido, err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(contenido);
        }
    });
function ejercicio(arregloStrings,
                   callback){
    const arregloRespuestas = [];
    arregloStrings.forEach(
        (string, indice) =>{
            const nombreArchivo = `${indice}-${string}.txt`;
            const contenidoArchivo = string;
            fs.writeFile(nombreArchivo, contenidoArchivo, (err)=>{
                const respuesta = {
                    nombreArchivo:nombreArchivo,
                    contenidoArchivo:contenidoArchivo,
                    error:err

                };
                arregloRespuestas.push(respuesta);
                const terminoElArreglo = arregloStrings.length == arregloRespuestas.length;
                if(terminoElArreglo){
                    callback(arregloRespuestas);
                }
            })

        })
}
ejercicio(['a','b','c'], (arregloRespuestas) =>{
    console.log(arregloRespuestas)
})