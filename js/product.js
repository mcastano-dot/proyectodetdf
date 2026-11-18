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
let idProducto = queryStringObj.get('id');
let seccionDetalle = document.querySelector('.detalle-producto');
let seccionReviews = document.querySelector('.rewiews');
fetch(`https://dummyjson.com/products/${idProducto}`)
.then(function(response) {
        return response.json();
})
.then(function(product) {
let tagsHTML = '';
        if (product.tags) {
            for (let i = 0; i < product.tags.length && i < 3; i++) {
                tagsHTML += `<li>#${product.tags[i]}</li>`;
            }
        }
        let marca = product.brand;
        if (marca == undefined) {
            marca = "Sin marca";
        }
        seccionDetalle.innerHTML = `
         <h2><em>${product.title}</em></h2>
            <h3 class="categorias"><strong>MARCA:</strong> ${marca}</h3>
            <h3 class="categorias"><strong>DESCRIPCIÓN:</strong> ${product.description}</h3>
            <p><strong>Precio:</strong> $${product.price}</p>
            <img src="${product.images[0]}" alt="${product.title}">
            <h3 class="categorias"><strong>CATEGORÍA:</strong></h3>
            <p><a href="./category.html?categoria=${product.category}">${product.category}</a></p>
            <h3 class="categorias"><strong>STOCK:</strong></h3>
            <p>${product.stock} unidades</p>
            <h3 class="categorias"><strong>TAGS:</strong></h3>
            <ul class="ul league-spartan2">
                ${tagsHTML}
            </ul>
        `;
        let reviewsHTML = '<h1 class="categorias"><em>Reseñas de clientes</em></h1>';
        
        if (product.reviews) {
            for (let i = 0; i < product.reviews.length; i++) {
                let rev = product.reviews[i];
                reviewsHTML += `
                    <h3 class="categorias"><strong>Rating:</strong> ${rev.rating}/5</h3>
                    <p>${rev.comment}</p>
                    <h3 class="categorias"><strong>Fecha:</strong> ${rev.date}</h3>
                    <h2 class="league-spartan"><strong>Usuario:</strong> ${rev.reviewerName}</h2>
                `;
            }
        }
        seccionReviews.innerHTML = reviewsHTML;
    })
    .catch(function(error) {
        console.log("Error al cargar producto: " + error);
    });
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