 let userEmail = localStorage.getItem('userEmail');
if (userEmail !== null) {
    let menu = document.querySelector('.menu');
 menu.innerHTML = `
        <li><a href="./index.html">HOME</a></li>
        <li>Bienvenido: ${userEmail}</li>
        <li><a href="#" id="boton-logout">logout</a></li>
    `;
}
