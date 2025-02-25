function creaTimer (time) {
    return function () { 
    setTimeout(function () {
            console.log('Timer scaduto');
        }, time);
    }
}

const timer = creaTimer(1000);
timer(); // dopo 1 secondo stampa 'Timer scaduto'