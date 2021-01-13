// Promsesas

// Resolve --> es una funcion que debemos ejecutar cuando queremos resolver una promesa
// Reject --> es una funcio que debemos ejecutar cuando queremos rechazar una promesa

// 1.- pending
// 2.- resolved
// 3.- rejected

// Sintaxis de constructor de promesas

// new Promise((resolve, reject) => {
//   if (true) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// function construirCallack(muroAConstruir, callback) {
//     setTimeout(() =>{
//         muroAConstruir.construido = true

//         let error = null
//         if(muroAConstruir.construido === false){
//             error = 'No se pudo construir'
//         }
//         callback(error, muroAConstruir)
//     }, 1000)
// }

const muro = {
    construir: false,
    apanar: false,
    pintar: false
}

// Promificacion es el proceso de volver promesa algo que no lo era inicialmente

function construir (muroAConstruir) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muroAConstruir.construido = true

            if(muroAConstruir.construido === false){
                reject('No se pudo construir')
                return
            }

            resolve(muroAConstruir)
        }, 1000)
    })
}


construir(muro)
    .then((muroConstruido) => {
    console.log('Se resolvio :D')
     console.log('then promesaAConstruir', muroConstruido)
    })
    .catch((error) => {
        console.log('No se resolvio :C', error)
    }) // Chaining methods

// console.log('promesaConstruir', promesaConstruir)

// async / await
// donde uso await debo marcar la funcion contendora (del await) como async
// La funcion que esta marcada con async, se vuelve una funcion que regresa una promesa

async function principal () {
    const muroConstruido = await construir(muro)
    const muroAplanado = await aplanar(muroConstruido)
    const muroPintado = await pintar(muroAplanado)
    return muroPintado
}

principal()
    .then(resultado => console.log('todo cool :D', resultado))
    .catch(error => console.log('fallé :C', error))