const celulas = document.querySelectorAll(".celula");
let checarturno = true


console.log(celulas);
const jogador_x = "x";
const jogador_o = "O";

const combinaçoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
] ; 



document.addEventListener("click" , (Event) => {
    if(Event.target.matches(".celula")){
        jogar(Event.target.id);
    }

});
function jogar(id) {
const celula = document.getElementById(id);
turno = checarturno ? jogador_x: jogador_o;
celula.textContent = turno;
celula.classList.add(turno);
checarturno = !checarturno;

}

function checarvencedor (turno){
    const vencedor = combinaçoes.some((comb) =>{
     return comb.every ((index) => {
         return celulas[index].classList.contains(turno);
     })

    });
     
    if (vencedor){
        encerrajogo(turno);
    }
    else if (checarempate ( )) {
        encerrarjogo();
    }
    else{
        checarturno = !checarvencedor;
    }
}
  function checarempate() {
   let x = 0;
   let O = 0;
   for (index in celulas){
       if (celulas [index].classList.contains (jogador_x))
           x++;
   }
   if (celulas[index].classList.contains(jogador_o)){
       o++;
   }

   return x + o === 9 ? true : false;

}

function encerrarjogo(vencedor = null){
    if (vencedor) {
    console.log("vencedor:" + vencedor );
    } 
    else{
        console.log("empatou");
    }
}