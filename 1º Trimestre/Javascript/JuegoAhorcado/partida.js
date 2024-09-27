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

let ctx = DOM.canvas.getContext('2d');
ctx.clearRect(0, 0, DOM.canvas.width, DOM.canvas.height);


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 6;

// Base de la horca
ctx.moveTo(75, 200);
ctx.lineTo(125, 200);
ctx.moveTo(100, 200);
ctx.lineTo(100, 50);
ctx.moveTo(175, 50);
ctx.lineTo(97, 50);
ctx.moveTo(99, 80);
ctx.lineTo(120, 50);
ctx.moveTo(172, 50);
ctx.lineTo(172, 70);
ctx.stroke();


function dibujar(num) {

    switch (num) {
        case 1:  // Cabeza
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.ellipse(172, 78, 8, 11, 0, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 2:  // Cuerpo
            ctx.moveTo(172, 86);
            ctx.lineTo(172, 120);
            ctx.stroke();
            break;
        case 3:  // Brazo izquierdo
            ctx.moveTo(172, 100);
            ctx.lineTo(150, 110);
            ctx.stroke();
            break;
        case 4:  // Brazo derecho
            ctx.moveTo(172, 100);
            ctx.lineTo(194, 110);
            ctx.stroke();
            break;
        case 5:  // Pierna izquierda
            ctx.moveTo(172, 120);
            ctx.lineTo(160, 140);
            ctx.stroke();
            break;
        case 6:  // Pierna derecha (completar el dibujo)
            ctx.moveTo(172, 120);
            ctx.lineTo(184, 140);
            ctx.stroke();
            setTimeout(reiniciarJuego, 3000);            
            setTimeout(alert("¡Has perdido!"), 3000);
            break;
    }
}

function reiniciarJuego() {
    palabraAleatoria = descomponerPalabra(generarPalabra());
    arrayVacio = new Array(palabraAleatoria.length).fill("_");
    contador = 0;  // Reinicia el contador
    DOM.resultado.innerHTML = arrayVacio.join(" ");
    DOM.letra.value = "";  // Limpia el input

    // Limpiar el canvas
    ctx.clearRect(0, 0, DOM.canvas.width, DOM.canvas.height);

    // Redibujar la estructura de la horca
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75, 200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100, 200);
    ctx.lineTo(100, 50);
    ctx.moveTo(175, 50);
    ctx.lineTo(97, 50);
    ctx.moveTo(99, 80);
    ctx.lineTo(120, 50);
    ctx.moveTo(172, 50);
    ctx.lineTo(172, 70);
    ctx.stroke();
}

// Agregar el evento de keyup para manejar el Enter
DOM.letra.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        comprobar();  // Llama a comprobar si se presiona Enter
    }
});
