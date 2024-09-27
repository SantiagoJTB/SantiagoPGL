const DOM = {
    enviar: document.getElementById("enviar"),
    letra: document.getElementById("letra"),
    resultado: document.getElementById("resultado"),
    canvas: document.getElementById("canvas")
};

DOM.enviar.addEventListener("click", comprobar);

function generarPalabra() {
    let array = ["palabra", "verbo", "adjetivo", "sustantivo"];
    let num = Math.floor(Math.random() * array.length);
    return array[num];
}

function descomponerPalabra(palabra) {
    return palabra.split("");
}

let palabraAleatoria = descomponerPalabra(generarPalabra());
let arrayVacio = new Array(palabraAleatoria.length).fill("_");
let contador = 0;  // Inicializa el contador para el dibujo
DOM.resultado.innerHTML = arrayVacio.join(" ");

function comprobar() {
    let letraEnviada = DOM.letra.value;
    let letraCorrecta = false;  // Para comprobar si se ha encontrado una letra

    for (let i = 0; i < palabraAleatoria.length; i++) {
        if (letraEnviada === palabraAleatoria[i]) {
            arrayVacio[i] = palabraAleatoria[i];
            letraCorrecta = true;  // Marca que se encontró una letra
        }
    }

    DOM.resultado.innerHTML = arrayVacio.join(" ");

    if (!letraCorrecta) {
        contador++;  // Aumenta el contador solo si la letra no es correcta
        dibujar(contador);
    }

    // Verificar si se ha ganado
    if (arrayVacio.join("") === palabraAleatoria.join("")) {
        alert("¡Has ganado!");
        reiniciarJuego();  // Función para reiniciar el juego
    }

    // Limpiar el input después de enviar la letra
    DOM.letra.value = "";
}

function dibujar(num) {
    let ctx = DOM.canvas.getContext('2d');
    ctx.clearRect(0, 0, DOM.canvas.width, DOM.canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    switch (num) {
        case 1:
            ctx.moveTo(75, 200);
            ctx.lineTo(125, 200);
            ctx.moveTo(100, 200);
            ctx.lineTo(100, 50);
            ctx.stroke();
            break;
        // Agrega más casos para los diferentes estados del ahorcado
        // case 2: // Dibuja la cabeza
        // case 3: // Dibuja el cuerpo
        // case 4: // Dibuja un brazo
        // case 5: // Dibuja el otro brazo
        // case 6: // Dibuja una pierna
        // case 7: // Dibuja la otra pierna
    }

    // Dibuja la cabeza (puedes añadir lógica aquí según el caso)
    if (num > 0) {
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.ellipse(100, 60, 8, 11, 0, 0, Math.PI * 2);
        ctx.stroke();
    }
}

function reiniciarJuego() {
    palabraAleatoria = descomponerPalabra(generarPalabra());
    arrayVacio = new Array(palabraAleatoria.length).fill("_");
    contador = 0;  // Reinicia el contador
    DOM.resultado.innerHTML = arrayVacio.join(" ");
    DOM.letra.value = "";  // Limpia el input
}

// Agregar el evento de keyup para manejar el Enter
DOM.letra.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        comprobar();  // Llama a comprobar si se presiona Enter
    }
});
