var arreglo = [
    1,
    2.2,
    "Hola",
    true,
    false,
    {},
    undefined,
    null,
    []
];

var arregloNumeros = [1,2,3];
arregloNumeros[0];
arregloNumeros[1];
arregloNumeros.push(4);

arregloNumeros.splice(0,0,0);
console.log( arregloNumeros);
arregloNumeros.splice(2,0,1.5);
console.log( arregloNumeros);
//var usuario = 1.5;
//var indiceUsuario = arregloNumeros.indexOf(usuario);
//arregloNumeros.splice(indiceUsuario,1);
//console.log( arregloNumeros);
arregloNumeros.slice(2,4)
console.log( arregloNumeros.slice(2,5));

var arregloNotasPrimerBimestre = [8.5, 9, 4 ]
var arregloNotasSegundoBimestre = [8.5, 9, 4 ]

//Destructuración de arreglos

var arregloNotas2018B = [...arregloNotasPrimerBimestre, ...arregloNotasSegundoBimestre];
console.log(arregloNotas2018B);

var david2018A = {
    globalizacion: 0,
    web:7
}
var david2018B = {
    etica: 8,
    moviles:8
}

var david = {
    ...david2018A,
    ...david2018B
}

console.log(david)
