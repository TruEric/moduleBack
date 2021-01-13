const fs = require('fs')

fs.appendFile('appendfile.txt', 'Este es un archivo creado mediante appendfile', 'utf8', (err) =>{
    if (err) {
        console.log('Error, no se pudo crear el archivo')
        return
    }
    console.log('Se creo un archivo con appendFile')
})