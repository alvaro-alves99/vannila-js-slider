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

var passou = false;
var podeEntrar = false;

//ESSE EVENTO DO WINDOW E ESSES IFS É PRA DEIXAR RESPONSIVO
    window.addEventListener("resize", function(){
        resize();
    });
    if(tamanhoTela < 1060 && tamanhoTela > 650){
        last = [2, 3, 4, 5, 1, 0];
        var cn3 = document.querySelector(".cn3 .textbox109");
        cn3.classList.add("displaynone");
    }

    if(tamanhoTela < 649){
        console.log("ok, é menor")
        last = [1, 2, 3, 4, 5, 0];
        var cn3 = document.querySelector(".cn3 .textbox109");
        cn3.classList.add("displaynone");

        var cn2 = document.querySelector(".cn2 .textbox109");
        cn2.classList.add("displaynone");

    }

    //AQUI COMECA A ATRIBUICAO DE EVENTOS E AS FUNCOES PRINCIPAIS
    botaoNEXT.addEventListener("click", next);
    botaoPREV.addEventListener("click", prev);

function next(){
        if(contador.tipo == "prev"){
            contador.num++;
        }

        contador.tipo = "next";

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

    if(contador.num < 0){
        passou = true;
    }

    console.log("CONTADOR NUM ATE AQUI: " + contador.num + " | PASSOU: " + passou);

    if(contador.num <= 0 && passou){
        console.log("entrei aqui777")
        contador.num = 0;
        contador.num = (sections.length - 1);
        console.log("contador.num depois: " + contador.num);

        passou = false;

        console.log(passou);

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

//PRA DEIXAR RESPONSIVO NO EVENTO DE REDIMENSIONAR A JANELA DO BROWSER
function resize(){
    tamanhoTela = window.innerWidth;
    if(tamanhoTela < 1060 && tamanhoTela > 650){
        last = [2, 3, 4, 5, 1, 0];
        var cn3 = document.querySelector(".cn3 .textbox109");
        cn3.classList.add("displaynone");
    }

    if(tamanhoTela < 649){
        console.log("ok, é menor")
        last = [1, 2, 3, 4, 5, 0];
        var cn3 = document.querySelector(".cn3 .textbox109");
        cn3.classList.add("displaynone");

        var cn2 = document.querySelector(".cn2 .textbox109");
        cn2.classList.add("displaynone");

    }
}
