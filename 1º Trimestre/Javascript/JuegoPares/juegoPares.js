const DOM = { 
    tabla: document.getElementById("table"),
    subirNivelBtn: document.getElementById("subirNivelBtn"),
    contadorErrores: document.getElementById("contadorErrores"),
    contadorAciertos: document.getElementById("contadorAciertos")
};

let contadorMatriz = 2; // Tamaño inicial de la matriz
let arrayJuego = [];
let paresEncontrados = []; // Nuevo array para almacenar los pares encontrados
let eleccion1 = null;
let eleccion2 = null;
let boton1 = null;
let errores = 0;
let aciertos = 0;
let botones = [];

// Crea una matriz vacía con el tamaño actual
function crearMatriz() {
    return new Array(contadorMatriz).fill(null).map(() => 
        new Array(contadorMatriz).fill(undefined));
}

// Genera un array con números aleatorios únicos y sus duplicados
function generarArrayDeAleatorios() {
    let arrayUnico = [];
    let cantidadNumerosArray = (contadorMatriz * contadorMatriz) / 2;

    while (arrayUnico.length < cantidadNumerosArray) {
        let numeroAleatorio = Math.floor(Math.random() * cantidadNumerosArray);
        if (!arrayUnico.includes(numeroAleatorio)) {
            arrayUnico.push(numeroAleatorio);
        }
    }

    // Generar el array completo con pares
    let arrayCompleto = arrayUnico.flatMap(num => [num, num]);
    return arrayCompleto.sort(() => Math.random() - 0.5); // Mezclar el array
}

// Llena la matriz con los valores del array
function llenarMatriz() {
    let matriz = crearMatriz();
    let array = arrayJuego;
    let contador = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = array[contador];
            contador++;
        }
    }
    return matriz;
}

// Muestra la matriz en la tabla del DOM
function mostrarMatriz() {
    let matriz = llenarMatriz();
    
    let table = document.createElement("table");
    botones = []; // Limpiar el array de botones

    for (let i = 0; i < matriz.length; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < matriz[i].length; j++) {
            let celda = document.createElement("td");
            let boton = document.createElement("button");
            let valor = matriz[i][j];
            boton.textContent = " "; // Inicialmente vacío
            boton.dataset.valor = valor; // Guardar el valor en un atributo data

            celda.appendChild(boton);
            fila.appendChild(celda);
            botones.push(boton); // Agregar botón al array de botones
        }

        table.appendChild(fila);
    }

    DOM.tabla.innerHTML = "";
    DOM.tabla.appendChild(table);

    // Agregar eventos a los botones después de que se han creado
    botones.forEach(boton => {
        boton.addEventListener("click", manejarClick);
    });
}

// Maneja el clic en los botones
function manejarClick(event) {
    let valorBoton = event.target.dataset.valor; // Obtener el valor del botón desde el atributo data
    let boton = event.target;

    if (eleccion1 === null) {
        eleccion1 = valorBoton;
        boton1 = boton;
        boton.textContent = valorBoton; // Mostrar valor al seleccionar
        boton.disabled = true;
    } else if (eleccion2 === null) {
        eleccion2 = valorBoton;
        boton.textContent = valorBoton; // Mostrar valor al seleccionar
        boton.disabled = true;

        if (eleccion1 === eleccion2) {
            // Encontrado un par, añadir ambos elementos a paresEncontrados
            paresEncontrados.push(valorBoton);
            paresEncontrados.push(valorBoton);

            aciertos++;
            actualizarContadores();
            
            // Verificar si se ha ganado
            let totalElementos = contadorMatriz * contadorMatriz;
            if (paresEncontrados.length === totalElementos || 
               (contadorMatriz % 2 !== 0 && paresEncontrados.length === totalElementos - 1)) {
                setTimeout(() => {
                    mostrarBotonSubirNivel(); // Mostrar el botón de subir de nivel
                }, 500); // Esperar medio segundo para mostrar el mensaje de victoria
            }
        } else {
            errores++;
            actualizarContadores();
            setTimeout(() => {
                boton1.textContent = " "; // Ocultar valor en el primer botón
                boton.textContent = " "; // Ocultar valor en el segundo botón
                boton1.disabled = false; // Rehabilitar el primer botón
                boton.disabled = false; // Rehabilitar el segundo botón
            }, 1000); // Esperar 1 segundo antes de volver a habilitar los botones
        }

        eleccion1 = null;
        eleccion2 = null;
    }
}

// Muestra el botón para subir de nivel
function mostrarBotonSubirNivel() {
    DOM.subirNivelBtn.style.display = "block";
}

// Oculta el botón para subir de nivel
function ocultarBotonSubirNivel() {
    DOM.subirNivelBtn.style.display = "none";
}

// Incrementa el tamaño de la matriz y reinicia el juego
function subirNivel() {
    contadorMatriz++;
    paresEncontrados = []; // Reiniciar paresEncontrados
    errores = 0; // Reiniciar errores
    aciertos = 0; // Reiniciar aciertos
    ocultarBotonSubirNivel(); // Ocultar el botón de subir nivel
    iniciarJuego();  // Reiniciar el juego con el nuevo nivel
}

// Actualiza los contadores en el DOM
function actualizarContadores() {
    DOM.contadorErrores.textContent = errores;
    DOM.contadorAciertos.textContent = aciertos;
}

// Inicia el juego
function iniciarJuego() {
    arrayJuego = generarArrayDeAleatorios(); // Generar el array inicial
    mostrarMatriz(); // Mostrar la matriz en la tabla
    ocultarBotonSubirNivel(); // Ocultar el botón de subir nivel al iniciar el juego
}

// Comienza el juego
function start() {
    iniciarJuego();
}

start(); // Llama a start para comenzar el juego
