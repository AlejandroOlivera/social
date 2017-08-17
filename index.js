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

app.get('/stooges/chat',(req, res, next) => {
    res.render('chat')
})

io.sockets.on('connection', (req, res, next) =>{
    var sendChat = function (title, text) {
        socket.emit('chat', {
            title: title,
            contents: text
        })
        
    }
setInterval(function(){
    var randomIndex = Math.floor(Math.random()*catchPhrases.length)
    sendChat('Stooge', catchPhrases[randomIndex])
},5000)
sendChat('Welcome to Stooge Chat', 'The Stooges are on the line')
socket.on('chat', function(data){
    sendChat('You', data.text)
})

})

app.get('/?', (req,res) => {
    res.send('hello world')
})

server.listen(port)
console.log(`La aplicacion esta escuchando en el puerto:${port}`)