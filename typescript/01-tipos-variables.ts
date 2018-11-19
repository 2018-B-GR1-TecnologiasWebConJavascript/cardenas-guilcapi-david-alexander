// 01-tipo-variables.ts

let edad: number | string = 13;
edad = 25;
edad = 'Nombre';

let variableLoca: any = '';
variableLoca = false;

let nombre = 'Carlos';
// duck typing -->  // además no es necesario poner le tipado el lenguaje ya sabe la variable, typescript ya deduce cual es el tipo de variable
//nombre = 13;

let casado= false;
casado = true;
casado = false;
casado = null;
casado = undefined;

let carlos: {    // Interface   ---> sirven para definir el tipo de JSON...para tipar el JSON
    nombre:string;
    apellido?: string;
} = {    // JSON
    nombre: 'Carlos',
    apellido: 'Ayala'
};

console.log(carlos)   // undefined

let numeros: number[] = [1,2,3,4];

let fechaNacimiento:Date = new Date();

/*
let promesa:Promise<number> = () => { return new Promise((resolve,reject)=> {
    resolve(1);
}
);
};
*/

function saludar(nombre:string,    // parametros requeridos
                 apellido?:string, // parametros opcionales
                 ...otrosNombres:string[]      /// parametros infinitos
):string {   // para devolver el tipo de variable que se retorna ... void si no se devuelve nada
    return 'Hola';
}

let respuestaSaludar = saludar('Carlos', 'Ayala', '', '', '', '');


// casteo de datos
function saludar2(nombre:string,    // parametros requeridos
                  apellido?:string, // parametros opcionales
                  ...otrosNombres:string[]      /// parametros infinitos
):any {   // para devolver el tipo de variable que se retorna ... void si no se devuelve nada
    return 'Hola';
}

let respuestaSaludar2 = <number> saludar2('Carlos', 'Ayala', '', '', '', '');
respuestaSaludar2 = 1;

// casteo de uno o el otro
function saludar3(nombre:string,    // parametros requeridos
                  apellido?:string, // parametros opcionales
                  ...otrosNombres:string[]      /// parametros infinitos
):string | number {   // para devolver el tipo de variable que se retorna ... void si no se devuelve nada
    return 'Hola';
}

let respuestaSaludar3 = <number> saludar2('Carlos', 'Ayala', '', '', '', '');
respuestaSaludar3 = 1;

const saludo = (nombre:string): number => {
    return 1;
}


class Usuario{
    public edad:string;
    nombre;               // public y any esta variable
    constructor() {

    }
    saludar(nombre: string):string {
        return nombre;
    }
}

const carlosInstancia = new Usuario();

interface UsuarioInterface{
    nombre:string;
    apellido?:string;
}


class UsuarioDummy{
    nombre:string;
    apellido?:string;
}

const carlos2:UsuarioDummy = {
    nombre:'Carlos',
    apellido:'Ayala',
};