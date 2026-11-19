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
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("busqueda");

let titulo = document.querySelector(".contenido-principal h2");
let sinResultados = document.querySelector(".sin-resultados");
let seccionResultados = document.querySelector(".resultados");

titulo.innerText = `Resultados de búsqueda para: ${busqueda}`;

fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    let productos = data.products;

    if(productos.length == 0) {
        sinResultados.innerText = `No hay resultados para el término: ${busqueda}`;
    } else {
        for(let i = 0; i < productos.length; i++) {
            seccionResultados.innerHTML += `
            <article class="producto">
            <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
            <h3>${productos[i].title}</h3>
            <p>${productos[i].description}</p>
            <p>Precio: $${productos[i].price}</p>
            <a class="boton-general" href="./product.html?id=${productos[i].id}">Ver detalle</a>
            </article>
            `;
        }
    }
})
.catch(function(error){
    console.log("El error es: " + error);
})