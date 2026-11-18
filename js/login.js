
let formLogin = document.querySelector('form.caja-formulario');
let inputEmail = document.querySelector('#mail');
let inputPassword = document.querySelector('#password');
let errorEmail = document.querySelector('.error-mail');
let errorPass = document.querySelector('.error-pass')
formLogin.addEventListener('submit', function(e) {
    e.preventDefault();
    errorEmail.innerText = "";
    errorPass.innerText = "";
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
let formBuscador = document.querySelector(".encabezado form");
let campoBuscador = document.querySelector(".encabezado input");
let errorBuscador = document.querySelector(".error-buscador");
formBuscador.addEventListener("submit", function (e) {
    e.preventDefault();

    if (campoBuscador.value == "") {
        errorBuscador.innerText = "El campo de búsqueda no puede estar vacío";
    } else if (campoBuscador.value.length < 3) {
        errorBuscador.innerText = "El término buscado debe tener al menos 3 caracteres";
    } else {
        this.submit();
    }
})
let listaCategorias = document.querySelector("ul.categorias");

fetch("https://dummyjson.com/products/categories")
.then(function(response){
    return response.json();
})
.then(function(data){
    for (let i = 0; i < data.length; i++) {
        listaCategorias.innerHTML += `<li><a href="./category.html?categoria=${data[i].slug}">${data[i].name}</a></li>`;
    }
})
.catch(function(error){
    console.log("El error es: " + error);
})
