// 01-tipo-variables.ts
let edad = 13;
edad = 25;
edad = 'Nombre';
let variableLoca = '';
variableLoca = false;
let nombre = 'Carlos';
// duck typing -->  // además no es necesario poner le tipado el lenguaje ya sabe la variable, typescript ya deduce cual es el tipo de variable
//nombre = 13;
let casado = false;
casado = true;
casado = false;
casado = null;
casado = undefined;
let carlos = {
    nombre: 'Carlos',
    apellido: 'Ayala'
};
console.log(carlos); // undefined
let numeros = [1, 2, 3, 4];
let fechaNacimiento = new Date();
/*
let promesa:Promise<number> = () => { return new Promise((resolve,reject)=> {
    resolve(1);
}
);
};
*/
function saludar(nombre, // parametros requeridos
apellido, // parametros opcionales
...otrosNombres /// parametros infinitos
) {
    return 'Hola';
}
let respuestaSaludar = saludar('Carlos', 'Ayala', '', '', '', '');
// casteo de datos
function saludar2(nombre, // parametros requeridos
apellido, // parametros opcionales
...otrosNombres /// parametros infinitos
) {
    return 'Hola';
}
let respuestaSaludar2 = saludar2('Carlos', 'Ayala', '', '', '', '');
respuestaSaludar2 = 1;
// casteo de uno o el otro
function saludar3(nombre, // parametros requeridos
apellido, // parametros opcionales
...otrosNombres /// parametros infinitos
) {
    return 'Hola';
}
let respuestaSaludar3 = saludar2('Carlos', 'Ayala', '', '', '', '');
respuestaSaludar3 = 1;
const saludo = (nombre) => {
    return 1;
};
class Usuario {
    constructor() {
    }
    saludar(nombre) {
        return nombre;
    }
}
const carlosInstancia = new Usuario();
class UsuarioDummy {
}
const carlos2 = {
    nombre: 'Carlos',
    apellido: 'Ayala',
};
