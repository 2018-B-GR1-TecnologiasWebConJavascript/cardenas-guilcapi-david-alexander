


    const arreglo = ['A', 'b', 'C'];

const respuesta = arreglo
    .forEach((
        valorActualDeLaIteracion, indice, arreglo) => {
    console.log('Valor:', valorActualDeLaIteracion);
    console.log('Indice:', indice);
    console.log('arreglo:', arreglo);

    }
    )

    console.log(respuesta);


const respuestaMap = arreglo.forEach( v => console.log(v));

//map
    const respuestaMap1 = arreglo
        .map(valorActual => valorActual.toUpperCase());


        console.log(respuestaMap1)

    const arregloNumeros = [5,9,10,3,8,2,7,1,4,6]



    if (0=== ''){
        console.log('Es verdad');
    } else {
        console.log('No es verdad');
    }

    const respuestaFilter = arregloNumeros
    .filter(valorActual=>valorActual >5)
        .map(n => n+1)
        .filter(n=> n>7)
        .forEach(n=>console.log(n))

    console.log(respuestaFilter)


    const respuestaFindIndex = arregloNumeros
    .findIndex(v => v===7);
    console.log(arregloNumeros.indexOf(7))
    console.log(respuestaFindIndex)


    const respuestaFind= arregloNumeros
        .find(v => v===7);
    console.log(respuestaFind)


    const respuestaSome = arregloNumeros
        .some(n=>n%11===0);
    console.log(respuestaSome)

const respuestaEvery = arregloNumeros
    .every(n => n<5);

    console.log(respuestaEvery)



    console.log(arregloNumeros)
    const respuestaReduce = arregloNumeros
    .reduce((valorActualDeLaOperacion, valorActualDelArreglo)=>{
        return valorActualDeLaOperacion + valorActualDelArreglo
    },
        0
    );
    console.log(respuestaReduce)


    console.log(arregloNumeros)
    const respuestaReduce2 = arregloNumeros
        .reduce((a,b)=>a -b, 100);
    console.log(respuestaReduce2)