const { request } = require("http");

const responded = (( request, response ) => {

    if( request.method === 'GET'){

        response.statusCode = 200
        response.setHeader('Content-Type', 'text/plain')
        response.end('Obtendras un recurso')
    }
    else if(request.method === 'POST'){
        post( request, response)
    }
    else response.end()
})

const post = ((request, response) =>{
    let content = ''

    request.on('data', data =>{
        content += data
    })
    request.on('end', () =>{
        console.log(content)
        response.statusCode = 200
        response.setHeader('Content-Type', 'content/json')
    })
})
module.exports = responded;