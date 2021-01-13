const fs = require('fs')

fs.rmdir('newDir_test', () =>{
    console.log('Folder eliminado')
})