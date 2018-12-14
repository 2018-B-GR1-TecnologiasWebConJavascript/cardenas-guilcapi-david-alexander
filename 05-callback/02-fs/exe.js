const fs = require('fs');
const rxjs = require('rxjs');
function inicialiarBDD() {
    return new Promise((resolve, reject) => {
        fs.readFile('people.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                error: error;
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
// const arregloF = [];
// const arregloM = [];
// const arregloN = [];
// inicialiarBDD().then(re => {
//     //console.log(re)
//     re.bdd.map(valor => {
//         switch (valor.gender) {
//             case 'female':
//                 arregloF.push(valor.gender);
//                 break;
//             case 'male':
//                 arregloM.push(valor.gender);
//                 //console.log(arregloM);
//                 break;
//             case 'n/a':
//                 arregloN.push(valor.gender);
//                 //console.log(arregloN);
//                 break;
//         }
//     });
//     console.log(arregloF);
//     console.log(arregloM)
//     console.log(arregloN);
// });
//
// inicialiarBDD().then(re => {
//     //console.log(re)
//     re.bdd.map(valor => {
//         console.log(valor.gender)
//
//     })
// });

const arregloRespuesta =[
    {
        a:false
    },
    {
        b:false
    },
    {
        c:false
    },
    {
        d:false
    },
    {
        e:false
    },
    {
        f:false
    },
    {
        g:false
    },
    {
        h:false
    },
    {
        i:false
    },
    {
        j:false
    },
    {
        k:false
    },
    {
        l:false
    },
    {
        m:false
    },
    {
        n:false
    },
    {
        o:false
    },
    {
        p:false
    },
    {
        q:false
    },
    {
        r:false
    },
    {
        s:false
    },
    {
        t:false
    },
    {
        u:false
    },
    {
        v:false
    },
    {
        t:false
    },
    {
        w:false
    },
    {
        x:false
    },
    {
        y:false
    },
    {
        z:false
    },
]

inicialiarBDD().then(re => {
    //console.log(re)
    re.bdd.map(valor => {
        const letraNombre = valor.name.split("")
        return letraNombre
    }).map((valor,index) =>{
          // console.log(valor[0])
        arregloRespuesta.map(valorR =>{
           // console.log(valorR)
            //console.log('kheeee',valor[index],valorR)
            // if(valorR[valor[0].toLowerCase()]){
            //     valorR[valor[0]] = true
            //     console.log(valorR[valor[0].toLowerCase()
            //         ])
            //
            // }
        })
        }).find(arregloRespuesta =>{
           // console.log(arregloRespuesta)
    })

});
let acumulador = 0;
inicialiarBDD().then(valor => {
    valor.bdd.forEach((valor,index)=>{

             if((valor.mass!="unknown")){
                 acumulador += parseInt(valor.mass)
                 console.log(acumulador)
             }
         })

})
inicialiarBDD().then(valor => {
    valor.bdd.every((valor)=>{

        console.log(valor.vehicles);


    })

})
//
// inicialiarBDD().then(nombrePersonaje => {
//     nombrePersonaje.bdd.forEach(valor => {
//         const vectorNombres = valor.name.split('');
//         vectorNombres.forEach((letraNombre, indice) => {
//             arregloRespuesta.forEach(letra=>{
//                 valor.name
//                 if (letra[letraNombre]){
//
//                     //console.log('tienes',letra,letra[letraNombre])
//
//                 }else{
//                     //console.log('no tienes')
//                 }
//
//             })
//
//         });
//     });
//     //console.log(arregloRespuesta);
// });
//
//
