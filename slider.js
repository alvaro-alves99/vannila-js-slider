var botaoNEXT = document.querySelector(".botao-next");
var botaoPREV = document.querySelector(".botao-prev");

var clicksPREV = 0;
var clicksNEXT = 0;

var clicks = 0;

var sections = document.querySelectorAll(".container-slider");
console.log(sections);

botaoNEXT.addEventListener("click", proximo);
botaoPREV.addEventListener("click", antes);

function proximo(){
    if(clicks == 0){
        sections[0].classList.add("some-div");
        sections[3].classList.add("aparece-div");

        clicks = 1;

        return;

    }

    if(clicks == -1){
        sections[4].classList.remove("primeira-ordem");
        sections[4].classList.remove("aparece-div");

        sections[2].classList.remove("some-div");

        clicks = 0;
        return;

    }

    if(clicks < -1){

        sections[5].classList.remove("aparece-div");

        //sections[5].classList.add("primeira-ordem");
        sections[1].classList.remove("some-div");

        clicks = -1;
        return;
    }

    if(clicks > 0){
        sections[1].classList.add("some-div");

        sections[5].classList.add("ultima-ordem");
        sections[5].classList.add("aparece-div");

        clicks = 2;
        return;
    }

    console.log(clicks);
}

function antes(){
    if(clicks > 1){
        sections[5].classList.remove("aparece-div");
        sections[1].classList.remove("some-div");

        sections[5].classList.remove("ultima-ordem");

        clicks = 1;
        return;
    }


    if(clicks > 0){
        sections[0].classList.remove("some-div");
        sections[3].classList.remove("aparece-div");

        clicks = 0;


        console.log(clicks);
        return;
    }

    if(clicks == 0){
        sections[4].className += (" primeira-ordem aparece-div");
        sections[2].classList.add("some-div");

        clicks = -1;


        console.log(clicks);
        return;
    }

    if(clicks < 0){
        sections[1].classList.add("some-div");
        sections[5].classList.remove("some-div");
        sections[5].className += (" aparece-div");

        clicks = -2;

        console.log(clicks);
        return;
    }

    clicks--;
    console.log(clicks);
}
