function contoAllaRovescia(n) {
    const timer = setInterval(() => {
        console.log(n);
        n--;
    }, 1000);
    setTimeout(() => {
        clearInterval(timer), console.log('Countdown terminato!');
    }, n * 1000 + 1000);
} 

contoAllaRovescia(10)