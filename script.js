
const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lampada' );

function lampadaquebrada() {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if ( !lampadaquebrada() ) {
    lamp.src = './img/ligada.jpg';
    document.body.style.background = 'rgb(240, 240, 46)';
    }
}

function lampOff () {
    if ( !lampadaquebrada() ) {
    lamp.src = './img/desligada.jpg';
    document.body.style.background = 'rgb(76, 77, 87)';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
    document.body.style.background = 'rgb(76, 77, 87)';
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)
lamp.addEventListener ('dblclick', lampBroken)



