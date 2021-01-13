const fs = require('fs')

fs.readFile('creado.txt', 'utf8', (error, data) => {
    if(error){
        console.log('error')
        return
    }
    console.log('Leido', data)
})