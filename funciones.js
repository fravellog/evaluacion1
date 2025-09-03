function inicioSesion() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    while (true) {
        //El bucle limpia los mensajes de error
        document.getElementById("errorDos").textContent = "";
        document.getElementById("errorUser").textContent = "";
        document.getElementById("errorContra").textContent = "";

        // Validar credenciales
        if (username == "" && password == "") {
            document.getElementById("errorDos").textContent = "Por favor, complete todos los campos.";
            return false; // Inicio de sesión fallido
        } else if (username == "Admin" && password != "1234") {
            document.getElementById("errorContra").textContent = "Ingrese la contraseña correcta";
            document.getElementById("password").select();
            return false;
        } else if (username != "Admin" && password == "1234") {
            document.getElementById("errorUser").textContent = "Ingrese el usuario correcto";
            document.getElementById("username").select();
            return false;
        } else if (username != "Admin" && password != "1234") {
            document.getElementById("errorDos").textContent = "Usuario y contraseña incorrectos";
            return false;
        } else if (username == "") {
            document.getElementById("errorUser").textContent = "Ingrese el usuario correcto";
            return false;
        } else if (password == "") {
            document.getElementById("errorContra").textContent = "Ingrese la contraseña correcta";
            return false;
        } else {
            return true; // Inicio de sesión exitoso
        }
    }
}

/* Este script se ejecuta cuando el contenido de la página ha sido cargado */
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("mostrarMenuBtn");
    const menu = document.getElementById("menuAnimado");
    const textoAleatorio = document.getElementById("textoAleatorio");
    const frases = [
        "¡Bienvenido a la página de prueba!",
        "Hoy es un gran día para aprender.",
        "Sigue adelante, lo estás haciendo bien.",
        "¡Explora todas las funcionalidades!",
        "Recuerda guardar tu trabajo frecuentemente."
    ];
    boton.addEventListener("click", function() {
        // Selecciona una frase aleatoria
        const random = frases[Math.floor(Math.random() * frases.length)];
        textoAleatorio.textContent = random;
        if (!menu.classList.contains('menu-visible')) {
            // Muestra el menú con animación
            menu.classList.add('menu-visible');
        }
        /* toggle hace visible el menú si está oculto y viceversa */
    });
});

