const turnOn = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');


function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
};

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './images/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './images/desligada.jpg';
    }
}

function brokeLamp() {
    lamp.src = './images/quebrada.jpg'
}

function lampOnOff() {
    if (turnOnOff.innerHTML == 'Turn On') {
        lampOn();
        turnOnOff.innerHTML = 'Turn Off';
    }else{
        lampOff();
        turnOnOff.innerHTML = 'Turn On';
    }   
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('click', brokeLamp);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);