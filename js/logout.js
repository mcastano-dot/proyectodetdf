let botonLogout = document.querySelector('#boton-logout');
if (botonLogout !== null) {
    botonLogout.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('userEmail');

        let menu = document.querySelector('.menu');
        menu.innerHTML = `
        <li><a href="./index.html">HOME</a></li>
        <li><a href="./login.html">Login</a></li>
        <li><a href="./register.html">Registro</a></li>
        `;
});
}