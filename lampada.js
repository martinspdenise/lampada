const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.scr.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!isLampBroken ()) {
        lamp.scr = './img.jpg/ligada.jpg';
    }
}

function lampOff () {
    if (!isLampBroken ()) {
        lamp.scr = './img.jpg/desligada.jpg';
    }
}

function lampBroken () {
    lamp.scr = './img.jpg/quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
