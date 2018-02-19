function prevSlider(){
    
    if(containerDentro.classList.contains("tudopai-frente")){
        
        containerDentro.classList.remove("tudopai-frente");
        
        containerDentro.classList.add("tudopai-inicial");
        
        return;
    }
    
    if(containerDentro.classList.contains("tudopai-inicial") || containerDentro.classList.length == 1){
        
        containerDentro.classList.remove("tudopai-inicial");
        containerDentro.classList.add("tudopai-prev");
    }
    
}


function nextSlider(){
    
    if(containerDentro.classList.length == 1 || containerDentro.classList.contains("tudopai-inicial")){
        
        containerDentro.classList.remove("tudopai-inicial");
        
        containerDentro.classList.add("tudopai-frente");
    }
    
    if(containerDentro.classList.contains("tudopai-prev")){
        
        containerDentro.classList.remove("tudopai-prev");
        
        containerDentro.classList.add("tudopai-inicial");
    }
}