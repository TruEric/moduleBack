// 1.- Protocolo cliente-servidor, sin estado => HTTP OK
// 2.- Metodos definidos (GE, POST, DELETE, ...) OK
// 3.- Sintaxis universal (rutas, '/recurso/identificador') OK
// 4.- Uso de hypermedios

const express = require('express')
const fs = require('fs')
const { request } = require('http')
const app = express()

app.use(express.json()) //midlewares
// app.((request, response, next) => {
    
// })

// /1 <- 1
// /50 <- 50
// /abc <- abc
app.get('/:id', (request, response) => {
    let { id } = request.params
    id = parseInt(id)

    const newKodemiaDataString = fs.readFileSync('kodemia.json', 'utf8')
    const kodemiaData = JSON.parse(newKodemiaDataString)

    const koderFound = kodemiaData.koders.find(koder => koder.value === id )

    if (!koderFound) {
        response.status(404)
        response.json({
            success: false,
            message: 'Koder not found'
        })
        return
    }

    response.json({
        success: true,
        data: koderFound
    })

})


// leeinformacion del archivo de koders
app.get('/', (request, response) => {

    const kodemiaData = fs.readFileSync('kodemia.json', 'utf8')
    const jsonData = JSON.parse(kodemiaData)
    // establece el header de la respuesta Content-type: application/json
    // stringify del objeto
    // response.end()
    response.json({
        success: true,
        mensage: 'koders API',
        data: jsonData.koders

    })
})

app.post('/', (request, response) => { 
    
    const kodemiaString = fs.readFileSync('kodemia.json', 'utf8')
    const kodemiaData = JSON.parse(kodemiaString)

    const newId = kodemiaData.koders.length + 1
    const { name, age } = request.body

    const newKoder = {
        id : newId,
        name,   // esto es igual a escribir name: name,
        age     // esto es igual a escribir age: age,
    }
    
    kodemiaData.koders.push(newKoder)

    const newKodemiaDataString = JSON.stringify(kodemiaData)

    fs.writeFileSync('kodemia.json', newKodemiaDataString, 'utf8')

    response.json({
        success: true,
        message: 'Koder agregado'
    })
})

app.listen(8080, () => {
    console.log('server listening on port 8080')
})