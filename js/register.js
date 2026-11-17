let formRegistro = document.querySelector('form.caja-formulario');
let inputEmail = document.querySelector('#mail');
let inputPass = document.querySelector('#password');
let inputPass2 = document.querySelector('#pass2');
let checkTerminos = document.querySelector('#terminos');

let errorEmail = document.querySelector('.error-mail');
let errorPass = document.querySelector('.error-pass');
let errorPass2 = document.querySelector('.error-pass2');
let errorTerminos = document.querySelector('.error-terminos');

formRegistro.addEventListener('submit', function(e) {
e.preventDefault();
if (inputEmail.value === "") {
errorEmail.innerText = "El campo correo electrónico es obligatorio.";
    } 
else if (inputPass.value === "") {
        errorPass.innerText = "El campo contraseña es obligatorio.";
    } 
    else if (inputPass.value.length < 6) {
        errorPass.innerText = "La contraseña debe tener al menos 6 caracteres";
    } 
     else if (inputPass.value !== inputPass2.value) {
        errorPass2.innerText = "Las contraseñas no coinciden";
    } 
     else if (checkTerminos.checked === false) {
        errorTerminos.innerText = "Debes aceptar los términos y condiciones para continuar.";
    } 
     else {
        this.submit();
    }
});
