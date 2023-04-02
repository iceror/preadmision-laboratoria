//popUp function
let popUpContainer = document.getElementById("pop-up-container");
let openPopUp = document.getElementById("open-pop-up");
let closePopUp = document.getElementById("close-pop-up");

openPopUp.addEventListener("click", open);

function open() {
    popUpContainer.classList.add("show");
    logName();
}

closePopUp.addEventListener("click", close);

function close() {
    popUpContainer.classList.remove("show");
}

function logName() {
    let playerName = document.getElementById("name");
    localStorage.setItem("nombreJugador", playerName.value);
    console.log(
        "Lista para jugar " + localStorage.getItem("nombreJugador") + "?"
    );

    document.getElementById("bienvenida-nombre").textContent =
        "Bienvenida " + localStorage.getItem("nombreJugador");
    /* let key = playerName.value;

    if (key) {
    localStorage.setItem(key);
    }

    for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(localStorage);
    openPopUp.innerHTML += "${key}";
    }
    */
}