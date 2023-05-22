const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const pass = document.getElementById("passw");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

let nombreValor, emailValor, passValor; // aquí guardamos los valores que usaremos después

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if (nombre.value.length < 6) {
        warnings += 'El nombre no es válido <br>';
        entrar = true;
    }
    
    if (!regexEmail.test(email.value)) {
        warnings += 'El email no es válido <br>';
        entrar = true;
    }
    
    if (pass.value.length < 8) {
        warnings += 'La contraseña no es válida <br>';
        entrar = true;
    }
    
    if (entrar) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "¡Echo!";
        nombreValor = nombre.value; // Guardar el valor del nombre
        emailValor = email.value; // Guardar el valor del email
        passValor = pass.value; // Guardar el valor de la contraseña
        
        // Guardar los valores en el Local Storage
        localStorage.setItem('nombreValor', nombreValor);
        localStorage.setItem('emailValor', emailValor);
        localStorage.setItem('passValor', passValor);
        
        console.log("Nombre:", nombreValor);
        console.log("Email:", emailValor);
        console.log("Contraseña:", passValor);
    }
});

// Inicio de sesión

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if (nombre.value.length < 6) {
        warnings += 'El nombre no es válido <br>';
        entrar = true;
    }
    
    if (!regexEmail.test(email.value)) {
        warnings += 'El email no es válido <br>';
        entrar = true;
    }
    
    if (pass.value.length < 8) {
        warnings += 'La contraseña no es válida <br>';
        entrar = true;
    }
    
       // Obtener los valores del Local Storage
       const storedNombreValor = localStorage.getItem('nombreValor');
       const storedEmailValor = localStorage.getItem('emailValor');
       const storedPassValor = localStorage.getItem('passValor');
       
       if (nombre.value !== storedNombreValor || email.value !== storedEmailValor || pass.value !== storedPassValor) {
           warnings += 'Los datos de inicio de sesión no coinciden <br>';
           entrar = true;
       }
       
       if (entrar) {
           respu.innerHTML = warnings;
       }
   });
   