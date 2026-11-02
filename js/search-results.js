let FormBuscador = document.querySelector("form.buscador")

FormBuscador.addEventListener('submit', function (e) {
    let inputBuscador = this.querySelector('input[name="búsqueda"]')
    let textoBuscado = inputBuscador.value.trim ();


if (textoBuscado === "") {
    e.preventDefault ();
    alert ("El campo de busqueda no puede estar vacio");

} else if (textoBuscado.length < 3) {
    e.preventDefault ();
    alert("El campo buscado debe tener al menos 3 caracteres")
}
});
