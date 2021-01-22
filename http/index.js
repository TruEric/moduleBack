const http = require('http')

const server = http.createServer((request, response) => {
    console.log(`La URL: ${request.url}`)

    if( request.method === 'GET'){
        response.write('Obtendras un recurso')
    }else if( request.method === 'POST'){
        response.write('Crearas un recuerso')
    }else{
        response.write('I dont know')
    }
    response.end()
})

server.listen(8080, () =>{
    console.log('servidor escuchando en puerto 8080')
})

// reponder 'obtendras un recurso' cuando nos llamen con un metodo get
// responder 'crearas un recurso' cuando nos llamen con un metodo post