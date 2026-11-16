
let formLogin = document.querySelector('form.caja-formulario');
let inputEmail = document.querySelector('#mail');
let inputPassword = document.querySelector('#password');

formLogin.addEventListener('submit', function(e) {
    e.preventDefault();
     if (inputEmail.value === "") {
        alert("Ingresar un correo electrónico es obligatorio.");
     }}
     else if (inputPassword.value === "") {
        alert("Ingresar una contraseña es obligatorio.");
    } 
    else if (inputPassword.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
    } 
  else {
    localStorage.setItem('userEmail', inputEmail.value);
    this.submit();
  };
  
g
