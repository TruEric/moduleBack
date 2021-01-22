const mongoose = require('mongoose')

const url = 'mongodb+srv://eric:eric123@decima-test.nnrg3.mongodb.net/kodemia'

mongoose.connect('url')

mongoose.connect('url', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Ya estamos conectados')
    })
    .catch(error => console.error('ERROR: ', error))