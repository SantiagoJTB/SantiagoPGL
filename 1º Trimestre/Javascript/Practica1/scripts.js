<<<<<<< HEAD

const objetos = {
    num: document.getElementById("numero"),
    boton: document.getElementById("boton"),
    tabla: document.getElementById("table")
};

function calcular(){
let max = 10;
let resultado;

objetos.tabla.innerHTML = "";

for(let i = 1; i <= max; i++){

    let fila = document.createElement("tr");
    let columna = document.createElement("td");

    resultado = i * objetos.num.value;

    columna.textContent = i + " x " + objetos.num.value + " = " + resultado;
    
    fila.appendChild(columna);
    objetos.tabla.appendChild(fila);
}
}

boton.addEventListener("click", calcular);
=======

const objetos = {
    num: document.getElementById("numero"),
    boton: document.getElementById("boton"),
    tabla: document.getElementById("table")
};

function calcular(){
let max = 10;
let resultado;

objetos.tabla.innerHTML = "";

for(let i = 1; i <= max; i++){

    let fila = document.createElement("tr");
    let columna = document.createElement("td");

    resultado = i * objetos.num.value;

    columna.textContent = i + " x " + objetos.num.value + " = " + resultado;
    
    fila.appendChild(columna);
    objetos.tabla.appendChild(fila);
}
}

boton.addEventListener("click", calcular);
>>>>>>> d892f7d6f172618a3a73a4a4d46e5773c3f457c3
