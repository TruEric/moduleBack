const fs = require('fs')

fs.copyFile('appendfile.txt', 'copied_appendfile.txt', (err) => {
    if (err){
        console.log('Error, no se pudo copiar el archivo', err)
        return
    }
    console.log('Archivo copidado exitosamente')
})