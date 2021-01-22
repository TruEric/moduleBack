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

// leeinformacion del archivo de koders
app.get('/', (request, response) => {

    const kodemiaData = fs.readFileSync('kodemia.json', 'utf8')
    // establece el header de la respuesta Content-type: application/json
    // stringify del objeto
    // response.end()
    response.json({
        success: true,
        mensage: 'koders API',
        data: kodersData
    })
})


app.post('/', (request, response) => { 
    
    console.log('body : ', request.body)
    //response.send('post a koder')
    console.log('name: ', request.body.name)
    fs.appendFileSync('koders.txt', `\n ${request.body.name}, ${request.body.age}` ,'utf8')
    response.json({
        success: true,
        data: request.body
    })
})

app.listen(8080, () => {
    console.log('server listening on port 8080')
})