var app = require("express")();
var express = require("express");

app.use(express.static(__dirname + '/public'));

var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function (req, res) {
    res.sendfile("index.html");
})

var mySocket;

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

//const port = new SerialPort({ path: 'COM3', baudRate: 9600 });

const port = new SerialPort({ path: 'COM3', autoOpen: true, baudRate: 9600, dataBits: 8, stopBits: 1 });

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));
// Read the port data
port.on("open", () => {
    console.log('serial port open');
});

var x = 0;

parser.on('data', data => {
    //console.log('got word from arduino:', data);
    /*
      if(data<10){
          console.log("Tirar Foto");
          console.log(x);
          x++;
      }
      */
    io.emit("dadoArduino", {
        valor: data
    });
});


io.on("connection", function (socket) {
    console.log("Usuario esta conectado!")
})

http.listen(3000, function(){
    console.log("O servido esta rodando na porta 3000!")
})