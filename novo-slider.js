var sections = document.querySelectorAll(".container-slider");

var botaoNEXT = document.querySelector(".botao-next");
var botaoPREV = document.querySelector(".botao-prev");

var first = [0, 1, 2, 3, 4, 5];
var last = [3, 4, 5, 0, 1, 2];
var contador = 0;

botaoNEXT.addEventListener("click", next);
botaoPREV.addEventListener("click", prev);


function next(){

        if(contador > sections.length - 1){
            contador = 0;
        }

        sections[first[contador]].classList.remove("aparece-div");
        sections[first[contador]].classList.add("some-div");

        sections[last[contador]].classList.remove("some-div");
        sections[last[contador]].classList.add("aparece-div");

        console.log(first[contador], last[contador]);
        console.log(sections);

        contador++;
        console.log(contador);

}

function prev(){

    sections[last[contador - 1]].classList.remove("aparece-div");
    sections[last[contador - 1]].classList.add("some-div");
    sections[first[contador - 1]].classList.remove("aparece-div");
    sections[first[contador - 1]].classList.remove("some-div");

    contador--;
    console.log(contador);
}

function volta(){
    sections[last].style.order = "9";
    sections[last].classList.remove("some-div");
}
