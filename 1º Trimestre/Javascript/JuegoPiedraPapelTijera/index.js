const DOM ={
    tijera:document.querySelector(".tijera"),
    papel:document.querySelector(".papel"),
    piedra:document.querySelector(".piedra"),
    resultado: document.querySelector(".resultado"),
    reiniciar: document.getElementById("reiniciar")
}

DOM.reiniciar.style.display = "none";
let eleccionMaquina;
let eleccionCliente;

function eleccionMaquinaFun(){
    let num = Math.floor(Math.random() * 3);
    array = ["tijera","papel","piedra"];
    return array[num];
}



function eleccionClienteFun(){
    DOM.tijera.onclick = () => {
        eleccionCliente = "tijera";
        elegirGanador();
    
    }
    DOM.papel.onclick = () => {
        eleccionCliente = "papel";
        elegirGanador();
    }
    DOM.piedra.onclick = () => {
        eleccionCliente = "piedra";
        elegirGanador();
    }
}
    
function elegirGanador(){
    eleccionMaquina = eleccionMaquinaFun();

    if(eleccionMaquina == eleccionCliente){
        DOM.resultado.innerHTML = "EMPATE!";
    }else if(eleccionCliente == "tijera" && eleccionMaquina == "papel"||
        eleccionCliente == "papel" && eleccionMaquina == "piedra"||
        eleccionCliente == "piedra" && eleccionMaquina == "tijera"
    ){
        DOM.resultado.innerHTML = "Has Ganado La Pelea!";
    }else{
        DOM.resultado.innerHTML = "Has Perdido La Pelea!";
    }

}

function reiniciar(){
    DOM.reiniciar.style.display = "block";

    DOM.reiniciar.onclick = () => {
        eleccionMaquina = null;
        eleccionCliente = null;
    
        DOM.resultado.innerHTML = "";
    
        DOM.reiniciar.style.display = "none";
    
    }
}

eleccionClienteFun();