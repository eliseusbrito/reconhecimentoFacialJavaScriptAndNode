const { SerialPort } = require('serialport');
const arduino = new SerialPort({ path: 'COM4', baudRate: 9600 });

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

setTimeout(ligarLed1, 2000);
setTimeout(desligarLed1, 2000);


