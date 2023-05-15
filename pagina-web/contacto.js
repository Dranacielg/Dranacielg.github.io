//valida el correo
function validarCorreo(mail){
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(mail).toLowerCase());
 }
 var form = document.getElementById('form');
 form.addEventListener("submit", function(event){
     if(validarCorreo(form.elements['correo'].value)){
       // Si todo está bien, podemos mandar el formulario.
       // Podemos hacerlo de la manera que quieramos, aquí lo voy a imprimir en consola para simplificar.
       console.log('Todo es perfecto!', form);
     } else{
        // Devolvemos el foco al input de correo electrónico si hay error.
        form.elements["correo"].focus();
     }
 });

 