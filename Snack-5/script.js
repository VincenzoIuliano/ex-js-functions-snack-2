function stampaOgniSecondo (message) {
  return function () {
    setInterval(() => {
      console.log(`${message}`);
    }, 1000);
  }
}

const message = 'Ciao!';

stampaOgniSecondo(message)();