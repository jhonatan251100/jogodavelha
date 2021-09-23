const celulas = document.querySelectorAll(".celula");
let checarturno = true


console.log(celulas);
const jogador_x = "x";
const jogador_o = "O";

document.addEventListener("click" , (Event) => {
    if(Event.target.matches(".celula")){
        jogador(Event.target.id);
    }

});
function jogar(id) {
const celula = document.getElementById(id);
turno = checarturno ? jogador_x: jogador_o;
celula.textContent = turno;
}