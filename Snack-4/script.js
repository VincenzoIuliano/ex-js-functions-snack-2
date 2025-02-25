function creaTimer (time) {
    return setTimeout(function () {
            console.log('Timer scaduto');
        }, time);
    }


creaTimer(2000); // Timer scaduto