// PopUp Resultados
console.log(localStorage);

document.getElementById("bienvenida-nombre").textContent =
    "¡Felicidades " + localStorage.getItem("nombreJugador") + "!";

document.getElementById("vj-resultado").textContent =
    "¡Obtuviste " + localStorage.getItem("puntajeTotal") + " puntos!";