const names = document.getElementById("names");
const mail = document.getElementById("mail");
const message = document.getElementById("message");
const formu = document.getElementById("formu");
const parrafo = document.getElementById("warnings");

formu.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrada = false;
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if (names.value.length < 6) {
        warnings += 'El nombre no es válido <br>';
        entrada = true;
    }
    
    if (!regexEmail.test(mail.value)) {
        warnings += 'El email no es válido <br>';
        entrada = true;
    }

    if (message.value.length < 10) {
        warnings += 'El mensaje no es válido (minimo 10 caracteres) <br>';
        entrada = true;
    }

    if (message.value.length > 500) {
        warnings += 'El mensaje no es válido (máximo 500 caracteres) <br>';
        entrada = true;
    }
    
    if (entrada) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "¡Mensaje Enviado!";
        console.log("Nombre:", names.value);
        console.log("Email:", mail.value);
        console.log("mensaje:", message.value);
    }
});