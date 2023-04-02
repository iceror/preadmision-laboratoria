//funciones preguntas
// pregunta 1
let opcion1 = document.getElementById("opcion1-1");
let opcion2 = document.getElementById("opcion2-1");
let opcion3 = document.getElementById("opcion3-1");

var puntaje = 0;

opcion2.addEventListener("click", respuestaCorrecta);

function respuestaCorrecta() {
    opcion2.classList.add("respuesta-correcta");
    opcion1.classList.add("respuesta-incorrecta");
    opcion3.classList.add("respuesta-incorrecta");

    if (opcion2) {
        console.log((puntaje = puntaje + 1));
    }
}

opcion1.addEventListener("click", respuestaIncorrecta);
opcion3.addEventListener("click", respuestaIncorrecta);

function respuestaIncorrecta() {
    opcion2.classList.add("respuesta-correcta");
    opcion1.classList.add("respuesta-incorrecta");
    opcion3.classList.add("respuesta-incorrecta");
}

//pregunta 2
let opcion4 = document.getElementById("opcion1-2");
let opcion5 = document.getElementById("opcion2-2");
let opcion6 = document.getElementById("opcion3-2");

opcion4.addEventListener("click", respuestaCorrecta2);

function respuestaCorrecta2() {
    opcion4.classList.add("respuesta-correcta");
    opcion5.classList.add("respuesta-incorrecta");
    opcion6.classList.add("respuesta-incorrecta");

    if (opcion4) {
        console.log((puntaje = puntaje + 1));
    }
}

opcion5.addEventListener("click", respuestaIncorrecta2);
opcion6.addEventListener("click", respuestaIncorrecta2);

function respuestaIncorrecta2() {
    opcion4.classList.add("respuesta-correcta");
    opcion5.classList.add("respuesta-incorrecta");
    opcion6.classList.add("respuesta-incorrecta");
}

//pregunta 3
let opcion7 = document.getElementById("opcion1-3");
let opcion8 = document.getElementById("opcion2-3");
let opcion9 = document.getElementById("opcion3-3");

opcion9.addEventListener("click", respuestaCorrecta3);

function respuestaCorrecta3() {
    opcion9.classList.add("respuesta-correcta");
    opcion7.classList.add("respuesta-incorrecta");
    opcion8.classList.add("respuesta-incorrecta");

    if (opcion9) {
        console.log((puntaje = puntaje + 1));
    }
}

opcion7.addEventListener("click", respuestaIncorrecta3);
opcion8.addEventListener("click", respuestaIncorrecta3);

function respuestaIncorrecta3() {
    opcion9.classList.add("respuesta-correcta");
    opcion7.classList.add("respuesta-incorrecta");
    opcion8.classList.add("respuesta-incorrecta");
}

let resultado = document.getElementById("resultados");

resultado.addEventListener("click", mostrarResultado);

function mostrarResultado() {
    console.log("¡Felicidades obtuviste " + puntaje + " puntos!");
    localStorage.setItem("puntajeTotal", puntaje);
    console.log(localStorage);
}