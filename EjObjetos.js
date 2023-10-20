
function Usuario(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Usuario.prototype.mostrarInfo = function() {
    return "Nombre: " + this.nombre + "<br>Apellido: " + this.apellido + "<br>Edad: " + this.edad;
};

var usuario;

function introduccionDeDatos() {
    var nombre = prompt("Dime un nombre:");
    var apellido = prompt("Dime un apellido:");
    var edad = prompt("Dime la edad:");

    usuario = new Usuario(nombre, apellido, edad);
}

function mostrarInfo() {
    if (usuario) {
        var infoContainer = document.getElementById("infoContainer");

        infoContainer.innerHTML = usuario.mostrarInfo();
    } else {
        alert("Primero ingrese la información del usuario.");
    }
}