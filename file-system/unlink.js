const fs = require('fs')

fs.unlink('appendfile.txt', (err) => {
    if (err){
        console.log('No se pudo eliminar el archivo')
        return
    }
    console.log('Archivo eliminado exitosamente')
})