'use strict'

const express = require('express')
const app = express()
const server = http.createServer(app)
const io = require('socket.io').listen(server)
const catchPhrases = ['Why I oughta...',
'Nyuk Nyuk Nyuk!', 'Poifect!', 'Spread out!',
'Say a few syllables!', 'Soitenly!'];
var port = 3001

app.set('view engine', 'jade')
app.set('view options', { layout: true})
app.set('views', __dirname+ '/views')

app.get('/stooges/:name?',(req, res, next) => {
    
    var name = req.params.name;

    switch (name? name.toLowerCase(): '') {
        case 'larry':
        case 'curly':
        case 'moe':
        res.render('stooges', {stooge: name});
                   
            break;
    
        default:
            next;
    }
});

app.get('/stooges/?', (req, res) => {
    res.send('no stooges listed')
})

app.get('/?', (req,res) => {
    res.send('hello world')
})

app.listen(port)
console.log(`La aplicacion esta escuchando en el puerto:${port}`)