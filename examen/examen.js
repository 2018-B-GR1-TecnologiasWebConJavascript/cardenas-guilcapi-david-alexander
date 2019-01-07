const fs = require('fs');
const rxjs = require('rxjs');

function leerArchivo() {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                console.log("error")
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
leerArchivo().then(lectura =>{
    lectura.bdd.map(valor =>{
  if(dictTypes.has(valor.types[0].type.name)){
            dictTypes.set("tipo: "+valor.types[0].type.name ,"")

        }
        else{
            dictTypes.set("tipo: "+valor.types[0].type.name , "")
        }


    });
    console.log("Pregunta1")

    console.log(dictTypes)
});

leerArchivo().then(lectura =>{
    lectura.bdd.map(valor =>{
        console.log(valor.abilities[0].ability.name)

        if(dictAbilities.has(valor.abilities[0].ability.name)){
            dictAbilities.set("nombre abilitie: "+valor.abilities[0].ability.name ,"")

        }
        else{
            dictAbilities.set("nombre abilitie: "+valor.abilities[0].ability.name , "")
        }


    });
    console.log("2")

    console.log(dictAbilities)
});

leerArchivo().then(lectura =>{
    lectura.bdd.forEach(valor =>{

        if(dictMove.has(valor.moves[0].move.name)){
            dictMove.set("nombre move: "+valor.moves[0].move.name,"")

        }

        else{
            dictMove.set("nombre move: "+valor.moves[0].move.name , "")
        }


    });

    console.log(dictMove)
});


leerArchivo().then(lectura =>{
    const arregloRespuesta =[

    ];

    lectura.bdd.forEach(valor =>{
        arregloRespuesta.push("nombre"+valor.moves[0].move.name+ "pokemons:"+valor.id)


    });

    console.log(arregloRespuesta)
});


class Dictionary {
    constructor () {

        this.items = {}
    }

    has (key) {
        return this.items.hasOwnProperty(key)
    }

    set (key, value) {
        this.items[key] = value
    }

    remove (key) {
        if (this.has(key)) {
            delete this.items[key]
            return true
        }

        return false
    }

    get (key) {
        return this.has(key) ? this.items[key] : undefined
    }

    values () {
        const values = []
        for (let key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key])
            }
        }
        return values
    }

    size () {
        return Object.keys(this.items).length
    }

    keys () {
        const keys = []
        for (let key in this.items) {
            keys.push(keys)
        }
        return keys


    }

    getItems () {
        return this.items
    }
}

const dictTypes = new Dictionary();
const dictAbilities = new Dictionary();
const dictMove= new Dictionary();
const dictClasifMove = new Dictionary()
const dicNombres = new Dictionary();

dicNombres.set("A" , false)
dicNombres.set("B" , false)
dicNombres.set("C" , false)
dicNombres.set("D" , false)
dicNombres.set("E" , false)
dicNombres.set("F" , false)
dicNombres.set("G" , false)
dicNombres.set("H" , false)
dicNombres.set("I" , false)
dicNombres.set("J" , false)
dicNombres.set("K" , false)
dicNombres.set("L" , false)
dicNombres.set("M" , false)
dicNombres.set("N" , false)
dicNombres.set("O" , false)
dicNombres.set("P" , false)
dicNombres.set("Q" , false)
dicNombres.set("R" , false)
dicNombres.set("S" , false)
dicNombres.set("T" , false)
dicNombres.set("U" , false)
dicNombres.set("V" , false)
dicNombres.set("W" , false)
dicNombres.set("X" , false)
dicNombres.set("Y" , false)
dicNombres.set("Z" , false)
leerArchivo().then(nombrePersonaje => {
    nombrePersonaje.bdd.forEach(valor => {
        const vectorNombres = valor.forms[0].name.split('');



        if(dicNombres.has(vectorNombres[0].toUpperCase())){
            dicNombres.set(vectorNombres[0].toUpperCase(),true)

        }
        else{
            dicNombres.set(vectorNombres[0].toUpperCase(), false)
        }

    });

    console.log(dicNombres);
});
leerArchivo().then((valor ) => {
    valor.bdd.map((valor, indice) => {
        if (indice <= 5) {
            acum = 0
            dicStats.set(valor.stats[indice].stat.name, 0)
            if (dicStats.has(valor.stats[indice].stat.name)) {


               let valorD = dicStats.get(valor.stats[indice].stat.name);
               valorD = valorD +1
                dicStats.set(valor.stats[indice].stat.name,valorD);

        }
         else{
                dicStats.set(valor.stats[indice].stat.name,acum);
            }
        }
 })
console.log(dicStats)
})
const dicStats = new Dictionary();

leerArchivo().then(lectura =>{

    lectura.bdd.map(valor =>{

        if(valor.held_items == ""){
            bandera=true;

        }


    })
    if (bandera = true){
        console.log("No todos tienen held items")
    }
    else{
        console.log("Todos usan held items")
    }
});