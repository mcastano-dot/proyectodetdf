let formBuscador = document.querySelector(".encabezado form");
let campoBuscador = document.querySelector(".encabezado input");
formBuscador.addEventListener("submit", function (e) {
    e.preventDefault();       

    if (campoBuscador.value == "") {
        alert("El campo de búsqueda no puede estar vacío");
    } else if (campoBuscador.value.length < 3) {
        alert("El término buscado debe tener al menos 3 caracteres");
    } else {
        this.submit();      
    }
})
