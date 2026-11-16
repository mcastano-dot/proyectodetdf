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
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categoria");
console.log(categoria);
let titulo = document.querySelector(".contenido-principal h2");
titulo.innerText = `Categoría: ${categoria}`;
fetch (`https://dummyjson.com/products/category/${categoria}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("El error es: " + error);
})