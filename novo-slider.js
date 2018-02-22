var sections = document.querySelectorAll(".container-slider");

var botaoNEXT = document.querySelector(".botao-next");
var botaoPREV = document.querySelector(".botao-prev");

var first = [0, 1, 2, 3, 4, 5];
var last = [3, 4, 5, 0, 1, 2];

var contador = {
    num:0,
    tipo: "",
};

var tamanhoTela = window.innerWidth;

console.log("o tipo do contador: " + contador.tipo);

var passou = true;

var podeEntrar = false;

window.onresize = function(){
        tamanhoTela = window.innerWidth;
        console.log(tamanhoTela);
};

    if(tamanhoTela < 1060){
        last = [2, 3, 4, 5, 1, 0];
    }

    botaoNEXT.addEventListener("click", next);
    botaoPREV.addEventListener("click", prev);

function next(){
        if(contador.tipo == "prev"){
            contador.num++;
        }

        contador.tipo = "next";

        console.log("o tipo do contador: " + contador.tipo)

        if(contador.num > sections.length - 1 || contador.num < 0){
            contador.num = 0;
        }

        sections[first[contador.num]].classList.remove("aparece-div");
        sections[first[contador.num]].classList.add("some-div");

        sections[last[contador.num]].classList.remove("some-div");
        sections[last[contador.num]].classList.add("aparece-div");

        if(contador.num == 0){
            podeEntrar = true;
        }

        contador.num++;
        console.log("CONTADOR: " + contador.num);
}

function prev(){
    if(contador.tipo == "next"){
        contador.num--;
    }

    contador.tipo = "prev";

    if(contador.num > sections.length - 1){
        contador.num = 0;
    }

    console.log("contador.num antes: " + contador.num);

    if(contador.num < 0){
        passou = true;
    }

    if(contador.num <= 0 && passou){
        contador.num = 0;
        contador.num = (sections.length - 1) + contador.num;
        console.log("contador.num depois: " + contador.num);

        passou = false;

        console.log(passou);
        console.log("heheh to entrando nessa condicional ainda");

        podeEntrar = true;
    }

    if(contador.num <=0 || podeEntrar){
        console.log("entrei nesse if");
        console.log("o contador.num chega desse jeito: " + contador.num);

        sections[last[contador.num]].classList.remove("aparece-div");
        sections[last[contador.num]].classList.add("some-div");

        sections[first[contador.num]].classList.remove("aparece-div");
        sections[first[contador.num]].classList.remove("some-div");
        sections[first[contador.num]].classList.add("aparece-div");

        console.log("contador.num final: " + contador.num);

        contador.num--;
        console.log("CONTADOR DPS DE TUDO: " + contador.num);
        return;

        }

}
