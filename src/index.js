
let ronda= 0;
let seleccionado = [];
let baseSimple = ["uno", "dos", "tres","cuatro","cinco","seis"];
let base = baseSimple.concat(baseSimple);
const $cuadros = document.querySelectorAll (".col");
const $tablero = document.querySelector ("#tablero");
configurarPanel ();
cuadroSeleccionado($tablero);

function cuadroSeleccionado ($tablero) {
        $tablero.onclick = function (e) {
        let cuadroMarcado = e.target;       
        manejarRonda (cuadroMarcado);
        
    }
}

function manejarRonda (cuadroMarcado) {
    if (cuadroMarcado.className === "hiden") {return}
    if (cuadroMarcado.className === "col select") {return}
    else {
    ronda ++;
    cuadroMarcado.classList.add("select");
    seleccionado.push (cuadroMarcado);
    
    if (ronda%2 === 0 ) {
    
        if ((seleccionado[seleccionado.length-1] !== seleccionado[seleccionado.length-2]) & 
            (seleccionado[seleccionado.length-1].innerText === seleccionado[seleccionado.length-2].innerText)) {
            seleccionado[seleccionado.length-1].className = "hiden";
            seleccionado[seleccionado.length-2].className = "hiden";
        }  

        if (seleccionado[seleccionado.length-1] !== seleccionado[seleccionado.length-2]) {
            document.querySelectorAll (".col.select").forEach (tiempo)
        }
     
    if (document.querySelectorAll (".col").length === 0) {
        $tablero.style.display = "none";
        document.querySelector ("h1").innerText = `Ganaste en ${ronda} rondas!!!`
        //alert ("Felicitaciones ganaste el juego!");
    }
}
}
}

function tiempo (seleccion) {
    setTimeout (function () {seleccion.className = "col"},500)
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

function configurarPanel () {
    shuffle (base);

base.forEach (function (color, i) {
    $cuadros[i].innerText = base[i];
    $cuadros[i].style.color = "white";
})
}  
