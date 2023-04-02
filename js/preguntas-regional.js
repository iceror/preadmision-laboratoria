//funciones preguntas
// pregunta 1
let opcion1 = document.getElementById("opcion1-1");
let opcion2 = document.getElementById("opcion2-1");
let opcion3 = document.getElementById("opcion3-1");

var puntaje = 0;

/* RELOJ
var reloj = 11;

function timer() {
  reloj--;
  console.log(reloj);

  if (reloj === 0) {
    clearInterval(intervalo);
    respuestaIncorrecta();
  }
}

var intervalo = setInterval(timer, 1000);

//parar timer pregunta1
opcion1.addEventListener("click", stopTimer);
opcion2.addEventListener("click", stopTimer);
opcion3.addEventListener("click", stopTimer);

function stopTimer() {
  reloj = clearInterval(intervalo);
}
*/

//pregunta 1
opcion1.addEventListener("click", respuestaCorrecta);

function respuestaCorrecta() {
    opcion1.classList.add("respuesta-correcta");
    opcion2.classList.add("respuesta-incorrecta");
    opcion3.classList.add("respuesta-incorrecta");

    if (opcion1) {
        console.log((puntaje = puntaje + 1));
    }
}

opcion2.addEventListener("click", respuestaIncorrecta);
opcion3.addEventListener("click", respuestaIncorrecta);

function respuestaIncorrecta() {
    opcion1.classList.add("respuesta-correcta");
    opcion2.classList.add("respuesta-incorrecta");
    opcion3.classList.add("respuesta-incorrecta");
}

//pregunta 2
/*
let triggerTimer = document.getElementById("siguiente-1");
triggerTimer.addEventListener("click", timer2);
//RELOJ
var reloj2 = 11;

function timer2() {
  reloj2--;
  console.log(reloj2);

  if (reloj2 === 0) {
    clearInterval(intervalo);
    respuestaIncorrecta();
  }
}
//parar timer pregunta 2
*/

let opcion4 = document.getElementById("opcion1-2");
let opcion5 = document.getElementById("opcion2-2");
let opcion6 = document.getElementById("opcion3-2");

opcion5.addEventListener("click", respuestaCorrecta2);

function respuestaCorrecta2() {
    opcion5.classList.add("respuesta-correcta");
    opcion4.classList.add("respuesta-incorrecta");
    opcion6.classList.add("respuesta-incorrecta");

    if (opcion5) {
        console.log((puntaje = puntaje + 1));
    }
}

opcion4.addEventListener("click", respuestaIncorrecta2);
opcion6.addEventListener("click", respuestaIncorrecta2);

function respuestaIncorrecta2() {
    opcion5.classList.add("respuesta-correcta");
    opcion4.classList.add("respuesta-incorrecta");
    opcion6.classList.add("respuesta-incorrecta");
}

//pregunta 3
/*
let triggerTimer2 = document.getElementById("siguiente-2");
triggerTimer2.addEventListener("click", timer3);
//RELOJ
var reloj3 = 11;

function timer3() {
  reloj3--;
  console.log(reloj3);

  if (reloj3 === 0) {
    clearInterval(intervalo);
    respuestaIncorrecta();
  }
}
*/
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