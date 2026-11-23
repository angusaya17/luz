// Duraciones en segundos
const DURACIONES = {
    rojo: 15,
    amarillo: 5,
    verde: 15
};

// Orden del ciclo
const ORDEN = ["rojo", "amarillo", "verde"];

let estadoActual = 0;          // índice en ORDEN
let segundosRestantes = DURACIONES[ORDEN[estadoActual]];
let intervalId = null;

function actualizarVista() {
    // Apagar todas las luces
    ORDEN.forEach(color => {
        document.getElementById(color).className = "luz apagada";
        document.getElementById("time" + capitalizar(color)).textContent = "";
    });

    // Encender la luz actual
    const colorActual = ORDEN[estadoActual];
    document.getElementById(colorActual).className = "luz " + colorActual;

    // Mostrar cuenta regresiva en la luz activa
    document.getElementById("time" + capitalizar(colorActual)).textContent = segundosRestantes;
}

function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function avanzarEstado() {
    estadoActual = (estadoActual + 1) % ORDEN.length;
    segundosRestantes = DURACIONES[ORDEN[estadoActual]];
}

// Tick de 1 segundo
function tick() {
    segundosRestantes--;
    if (segundosRestantes <= 0) {
        avanzarEstado();
    }
    actualizarVista();
}

function iniciar() {
    if (intervalId !== null) return;      // ya está corriendo
    actualizarVista();
    intervalId = setInterval(tick, 1000);
}

function detener() {
    if (intervalId === null) return;
    clearInterval(intervalId);
    intervalId = null;
}

// Botón "Encender semáforo" -> arranca/detiene
document.getElementById('btnSem').onclick = function () {
    if (intervalId === null) {
        iniciar();
    } else {
        detener();
    }
};

// Botón "Automatic" -> igual que encender (arranca/detiene el ciclo)
function launchAuto() {
    if (intervalId === null) {
        iniciar();
    } else {
        detener();
    }
}