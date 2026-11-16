let botonLogout = document.querySelector('#boton-logout');
if (botonLogout !== null) {
    botonLogout.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('userEmail');
        location.reload();
})};