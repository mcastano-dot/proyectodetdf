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
let seccionSmartphones = document.querySelector(".smartphones");
let seccionCocina = document.querySelector(".cocina");

function mostrarCategoria(categoria, seccion) {
    fetch(`https://dummyjson.com/products/category/${categoria}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let productos = data.products;

        for (let i = 0; i < 10; i++) {
            seccion.innerHTML += `
            <article class="producto">
            <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
            <h3>${productos[i].title}</h3>
            <p>${productos[i].description}</p>
            <p>Precio: $${productos[i].price}</p>
            <a class="boton-general" href="./product.html?id=${productos[i].id}">Ver detalle</a>
            </article>
            `;
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    })
}
mostrarCategoria("smartphones", seccionSmartphones);
mostrarCategoria("kitchen-accessories", seccionCocina);