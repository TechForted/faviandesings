const bottoms = document.querySelectorAll(`.section`);
const indicatorBottoms = document.querySelectorAll(`.indicator`);
const iconBottoms = document.querySelectorAll(`.icon`);
const page = document.querySelectorAll(`.main__section`);

verificador = [true, false, false]
texto = `Yo soy un desarrollador web`;
contenedorTexto = texto.split("");
spanRepeat = [];
for(i in texto){
    spanRepeat[i] = document.createElement(`SPAN`);
    spanRepeat[i].classList.add(`letra`);
    spanRepeat[i].innerHTML = contenedorTexto[i];
}
functionBottom = (bottomClick)=>{
    verificador[bottomClick] = false;
    for(i in verificador){
        if(verificador[i] == true){
            
            if(screen.width <= 768){
                bottoms[i].style=`background-size: 0% 0%;animation-name: animation-header-deselect-mobile;animation-duration: 1s;`;
            }
            else{
                bottoms[i].style=`background-size: 0% 0%;animation-name: animation-header-deselect;animation-duration: 1s;`;
            }
            iconBottoms[i].style=`width: 30%;bottom: 10%;animation-name: animation-header-icon-deselect;animation-duration: 1s;`;
            
            indicatorBottoms[i].style=`background-color: #333;box-shadow: 0 0 0px 0px #00ff73;animation-name: animation-header-indicator-deselect;animation-duration: 1s;`;

            page[i].style=`z-index: -${i};overflow:hidden;`
            
            verificador[i] = false;
        }
    }
    window.scroll(0,0);

    
    if(screen.width <= 768){
        bottoms[bottomClick].style=`background-size: 100% 75%;animation-name: animation-header-select-mobile;animation-duration: 1s;`;
    }
    else{
        bottoms[bottomClick].style=`background-size: 55% 75%;animation-name: animation-header-select;animation-duration: 1s;`;
    }
    iconBottoms[bottomClick].style=`width: 23%;bottom: 15%;animation-name: animation-header-icon;animation-duration: 1s;`;
    
    indicatorBottoms[bottomClick].style=`background-color: #00ff73;box-shadow: 0 0 3px 1px #00ff73;animation-name: animation-header-indicator;animation-duration: 1s;`;

    page[bottomClick].style=`z-index: 0; overflow:none;`
}
console.log(screen.width);
verificadorSection = (Verificador,BotomPulsado)=>{
    if(Verificador == false){
        console.log(`la section ${BotomPulsado+1} fue seleccionada`);
        functionBottom(BotomPulsado)
        verificador[BotomPulsado] = true;
    }
    else{
        console.log(`la section ${BotomPulsado+1} ya fue seleccionada`);
    }
}

selectBottom1 = ()=>{
    verificadorSection(verificador[0],0);
    verificador[0] = true;
}
selectBottom2 = ()=>{
    verificadorSection(verificador[1],1);
    verificador[1] = true;
}
selectBottom3 = ()=>{
    verificadorSection(verificador[2],2);
    verificador[2] = true;
}
selectBottom1();
bottoms[0].addEventListener("click",selectBottom1);
bottoms[1].addEventListener("click",selectBottom2);
bottoms[2].addEventListener("click",selectBottom3);