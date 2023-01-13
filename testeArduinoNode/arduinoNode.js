/*
const { SerialPort } = require('serialport');
const arduino = new SerialPort({ path: 'COM3', baudRate: 9600 });

function ligarLed1() {
    arduino.write('A');
}


function desligarLed1() {
    arduino.write('B');
}


function ligarLed2() {
    arduino.write('C');
}


function desligarLed2() {
    arduino.write('D');
}

function leitura() {
   
   console.log(arduino.read());
}

setTimeout(leitura(), 2000);
setTimeout(leitura(), 3000);
setTimeout(leitura(), 4000);
setTimeout(leitura(), 5000);
setTimeout(leitura(), 6000);

var t = 0;


for(var i = 0; i <10; i++){
    setTimeout(ligarLed1, t + 2000);
    setTimeout(desligarLed1, t + 4000);
    setTimeout(ligarLed2, t +8000);
    setTimeout(desligarLed2, t +12000);
    i++;
     
}
*/
/*
const {SerialPort} = require('serialport');
const {ReadlineParser} = require('@serialport/parser-readline');

//const port = new SerialPort({ path: 'COM3', baudRate: 9600 });

const port = new SerialPort({path: 'COM3', autoOpen:true,baudRate:9600,dataBits: 8,stopBits: 1});

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));
// Read the port data
port.on("open", () => {
  console.log('serial port open');
});

var x = 0;

parser.on('data', data =>{
  //console.log('got word from arduino:', data);
    if(data<10){
        console.log("Tirar Foto");
        console.log(x);
        x++;
    }

});
*/

var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var mySerial = new SerialPort("COM3", {
    baudrate: 9600,
    parser: serialport.parsers.readline("\n")
});

mySerial.on("open", function(){
    console.log("Porta Aberta");
})

mySerial.on("data", function(dados){
    console.log(dados);
})

