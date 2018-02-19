var botaoNEXT = document.querySelector(".botao-next");

var botaoPREV = document.querySelector(".botao-prev");

var containerDentro = document.querySelector(".dentro-container");

var sections = document.querySelectorAll(".container-slider");
console.log(sections);

var cn1 = document.querySelector(".cn1");
var cn3 = document.querySelector(".cn3");
var cn4 = document.querySelector(".cn4");
var cn5 = document.querySelector(".cn5");
var cn6 = document.querySelector(".cn6");
var textcn4 = document.querySelector(".cn4 .textbox109");
var textcn3 = document.querySelector(".cn3 .textbox109");
var textcn5 = document.querySelector(".cn5 .textbox109");

botaoNEXT.addEventListener("click", mudaLargura);
botaoPREV.addEventListener("click", voltaLargura);

var inicio = true;


function mudaLargura(){

    if(inicio){

    /*REMOVENDO CLASSES DO TEXTBOX*/
    textcn4.classList.remove("displaynone");
    textcn4.classList.remove("some-div");
    /*FIM DA REMOCAO*/


    cn1.classList.add("some-div");

    cn4.classList.remove("displaynone");
    cn4.classList.remove("some-div");
    cn4.classList.add("aparece-div");
    textcn4.classList.add("div-block");

    inicio = false;

    return;

    }

    if(!inicio){
        cn5.classList.remove("aparece-div");
        cn3.classList.remove("some-div");
        textcn3.classList.remove("displaynone");

        inicio = true;

        return;
    }



}

function voltaLargura(){

    if(!inicio){
        cn1.classList.remove("some-div");

        cn1.classList.add("aparece-div");

        cn4.classList.remove("aparece-div")
        textcn4.classList.add("some-div");

        setTimeout(function(){
            textcn4.classList.add("displaynone");
            console.log("tou rodando ai");
        }, 2000);

        inicio=true;

        return;
    }

    if(inicio){
        cn3.classList.add("some-div");
        cn5.classList.add("aparece-div");

        textcn5.classList.remove("displaynone");
        setTimeout(function(){
            textcn3.classList.add("displaynone");
        });

        inicio=false;

    }

}
