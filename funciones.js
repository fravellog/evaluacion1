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