const fs = require('fs')

fs.mkdir('newDir_test2', { recursive: true }, (err) =>{
    if (err){
        console.log('Error, no se pudo crear el directorio')
        return
    }
    console.log('Directorio creado exitosamente')
})