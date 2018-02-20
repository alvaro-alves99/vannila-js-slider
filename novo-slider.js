var sections = document.querySelectorAll(".container-slider");

var botaoNEXT = document.querySelector(".botao-next");
var botaoPREV = document.querySelector(".botao-prev");

var first = [0, 1, 2, 3, 4, 5];
var last = [3, 4, 5, 0, 1, 2];
var contador = {
    num:0,
};
var passou = true;

var podeEntrar = false;

botaoNEXT.addEventListener("click", next);
botaoPREV.addEventListener("click", prev);


function next(){
        if(contador > sections.length - 1 || contador < 0){
            contador = 0;
        }

        sections[first[contador]].classList.remove("aparece-div");
        sections[first[contador]].classList.add("some-div");

        sections[last[contador]].classList.remove("some-div");
        sections[last[contador]].classList.add("aparece-div");

        if(contador == 0){
            podeEntrar = true;
        }

        contador++;
        console.log("CONTADOR: " + contador);
}

function prev(){
    if(contador > sections.length - 1){
        contador = 0;
    }

    console.log("contador antes: " + contador);

    if(contador < 0){
        passou = true;
    }

    if(contador <= 0 && passou){
        contador = 0;
        contador = (sections.length - 1) + contador;
        console.log("contador depois: " + contador);

        passou = false;

        console.log(passou);
        console.log("heheh to entrando nessa condicional ainda");

        podeEntrar = true;
    }

    if(contador <=0 || podeEntrar){
        console.log("entrei nesse if");
        console.log("o contador chega desse jeito: " + contador);

        sections[last[contador]].classList.remove("aparece-div");
        sections[last[contador]].classList.add("some-div");

        sections[first[contador]].classList.remove("aparece-div");
        sections[first[contador]].classList.remove("some-div");
        sections[first[contador]].classList.add("aparece-div");

        console.log("contador final: " + contador);

        contador--;
        console.log("CONTADOR DPS DE TUDO: " + contador);
        return;

        }

}

function volta(){
    sections[last].style.order = "9";
    sections[last].classList.remove("some-div");
}
