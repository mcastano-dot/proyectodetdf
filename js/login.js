
let formLogin = document.querySelector('form.caja-formulario');
let inputEmail = document.querySelector('#mail');
let inputPassword = document.querySelector('#password');
let errorEmail = document.querySelector('.error-mail');
let errorPass = document.querySelector('.error-pass')

formLogin.addEventListener('submit', function(e) {
    e.preventDefault();
     if (inputEmail.value === "") {
     errorEmail.innerText =  "Ingresar un correo electrónico es obligatorio.";
     }
     else if (inputPassword.value === "") {
    errorPass.innerText = "Ingresar una contraseña es obligatorio.";
    } 
    else if (inputPassword.value.length < 6) {
    errorPass.innerText = "La contraseña debe tener al menos 6 caracteres";
    } 
  else {
    localStorage.setItem('userEmail', inputEmail.value);
    this.submit();
  }
});
  
