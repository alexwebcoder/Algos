function logEvent(phase, element, color) {
    const message = `${element} clicked during ${phase} phase`;
    const log = document.createElement('div');
    log.textContent = message;
    log.style.color = color;
    document.body.appendChild(log);
}


document.querySelector('.outer').addEventListener('click', (event) => {
    logEvent('capture', 'Outer', 'blue');
}, true);


document.querySelector('.outer').addEventListener('click', (event) => {
    logEvent('bubble', 'Outer', 'red');
});

document.querySelector('.middle').addEventListener('click', (event) => {
    logEvent('capture', 'Middle', 'blue');
    // event.stopPropagation();
}, true);

document.querySelector('.middle').addEventListener('click', (event)=> {
    logEvent('bubble', 'Middle', 'red');
    event.stopImmediatePropagation();
});

document.querySelector('.middle').addEventListener('click', (event)=> {
    logEvent('bubble', 'Middle (Skipped)', 'gray');
});

document.querySelector('.inner').addEventListener('click', (event)=> {
    logEvent('capture', 'Inner', 'blue');
}, true);

document.querySelector('.inner').addEventListener('click', (event)=> {
    logEvent('bubble', 'Inner', 'red');
})