const panel = document.querySelector(".box__views");
const buttoms = document.querySelectorAll(".buttoms");

works = `<h2 class="tittle">Mis Trabajos Realizados</h2>
<p class="description">Aqui puede ver algunos trabajos que e realizado a lo largo de mi carrera, por temas de seguridad no mostrare el codigo</p>
<div class="views">
    <a href="#" class="view view--1">
    <div class="view__content">
        <h3 class="view__tittle">Pagina 1</h3>
        <p class="view__description">Descripcion</p>
        </div>
    </a>
    <a href="#" class="view view--2">
        <div class="view__content">
            <h3 class="view__tittle">Pagina 2</h3>
            <p class="view__description">Descripcion</p>
        </div>
    </a>
    <a href="#" class="view view--3">
        <div class="view__content">
            <h3 class="view__tittle">Pagina 3</h3>
            <p class="view__description">Descripcion</p>
        </div>
    </a>
    </div>`;

proyects = `<h2 class="tittle">Mis Proyectos Realizados</h2>
<p class="description">Aqui puede ver algunos Proyectos personales que e realizado por mi cuenta, el codigo de cada proyecto lo pueden encontrar en mi repositorio GitHub</p>
    <div class="views">
    <a href="#" class="view view--1">
    <div class="view__content">
        <h3 class="view__tittle">Proyecto 1</h3>
        <p class="view__description">Descripcion</p>
        </div>
    </a>
    <a href="#" class="view view--2">
        <div class="view__content">
            <h3 class="view__tittle">Proyecto 2</h3>
        <p class="view__description">Descripcion</p>
        </div>
    </a>
    <a href="#" class="view view--3">
        <div class="view__content">
            <h3 class="view__tittle">Proyecto 3</h3>
        <p class="view__description">Descripcion</p>
        </div>
    </a>
    </div>`;
content = [works,proyects];

buttomAction1 = ()=>{
    console.log("El boton 1 a sido pultado")
    panel.innerHTML= content[0];
}
buttomAction2 = ()=>{
    console.log("El boton 2 a sido pultado")
    panel.innerHTML= content[1];
}

buttoms[0].addEventListener("click",buttomAction1);
buttoms[1].addEventListener("click",buttomAction2);