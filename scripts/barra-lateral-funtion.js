const buttomOpen = document.querySelector(".botton_contacts");
const buttomClose = document.querySelector(`.barra__lateral__close`);
const barraLateral = document.querySelector(".barra__lateral");

openBarra = ()=>{
    barraLateral.style=`left: 0;`;
}
closeBarra = ()=>{
    barraLateral.style=`left: -50vh;`;
}

buttomOpen.addEventListener(`click`,openBarra);
buttomClose.addEventListener(`click`,closeBarra);