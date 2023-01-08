const buttomContent = document.querySelectorAll(`.aside__buttom__content`)
const aside__panel = document.querySelector(`.aside__bottoms`);
const buttom = document.querySelectorAll(`.aside__bottom`);
const indicator = document.querySelectorAll(`.aside__indicator`);
const mainView = document.querySelector(`.main__content`);
buttomPush = [true, false, false];

services = `<div class="aside__content aside__content--1">
<div class="column__window column--right">
    <div class="window">
        <div class="window__header">
        <h2 class="window__tittle">Mantenimiento Web</h2>
        </div>
        <div class="window__main">
            <p class="window__description">
            Puedes contactarme para realizar cambios o actualizar tu pagina web, esto puede ser muy util para clientes que necesitan actualizar su pagina web ocasionalmente
            </p>
        </div>
    </div>
    <div class="window">
        <div class="window__header">
        <h2 class="window__tittle">Desarrollador Web</h2>
        </div>
        <div class="window__main">
            <p class="window__description">
                Gestiono y manejo la creacion de paginas webs desde 0 utilizando mis conocimientos en programacion, diseño y programas profesionales, todo para realizar una pagina web que cumpla todas las necesidades del cliente
            </p>
        </div>
    </div>
</div>
<div class="column__window column--center">
    <div class="window">
        <div class="window__header">
        <h2 class="window__tittle">Diseñador Web</h2>
        </div>
        <div class="window__main">
            <p class="window__description">
                Elaboro sus paginas webs utilizando un diseño muy representativo visualmente para usted
            </p>
        </div>
    </div>
    <img src="" alt="">
</div>
<div class="column__window column--left">
    <div class="window">
        <div class="window__header">
        <h2 class="window__tittle">Maquetador Web</h2>
        </div>
        <div class="window__main">
            <p class="window__description">
                Puedo traducir el diseño gráfico a lenguajes de programacion con el objetivo que los navegadores web interpreten correctamente todos los elementos visuales
            </p>
        </div>
    </div>
    <div class="window">
        <div class="window__header">
        <h2 class="window__tittle">SEO (Optimización para motores de búsqueda)</h2>
        </div>
        <div class="window__main">
            <p class="window__description">
                Al momento de desarrollar sitios webs tomo mucho en cuenta el posicionamiento de su sitio web en los buscadores, de esta manera usted puede recibir mas visitas en su website
            </p>
        </div>
    </div>
</div>
<!-- <script src="scripts/aside-buttoms.js"></script> -->
</div>`;
services_mobile = `<div class="aside__content aside__content--1">
<div class="column__window column--right">
    <div class="window">
        <div class="window__header">
        <h2 class="window__tittle">Mantenimiento Web</h2>
        </div>
        <div class="window__main">
            <p class="window__description">
            Puedes contactarme para realizar cambios o actualizar tu pagina web, esto puede ser muy util para clientes que necesitan actualizar su pagina web ocasionalmente
            </p>
        </div>
    </div>
    <div class="window">
        <div class="window__header">
        <h2 class="window__tittle">Desarrollador Web</h2>
        </div>
        <div class="window__main">
            <p class="window__description">
                Gestiono y manejo la creacion de paginas webs desde 0 utilizando mis conocimientos en programacion, diseño y programas profesionales, todo para realizar una pagina web que cumpla todas las necesidades del cliente
            </p>
        </div>
    </div>
</div>
<div class="column__window column--center">
    <div class="window">
        <div class="window__header">
        <h2 class="window__tittle">Diseñador Web</h2>
        </div>
        <div class="window__main">
            <p class="window__description">
                Elaboro sus paginas webs utilizando un diseño muy representativo visualmente para usted
            </p>
        </div>
    </div>
    <img src="" alt="">
</div>
<div class="column__window column--left">
    <div class="window">
        <div class="window__header">
        <h2 class="window__tittle">Maquetador Web</h2>
        </div>
        <div class="window__main">
            <p class="window__description">
                Puedo traducir el diseño gráfico a lenguajes de programacion con el objetivo que los navegadores web interpreten correctamente todos los elementos visuales
            </p>
        </div>
    </div>
    <div class="window">
        <div class="window__header">
        <h2 class="window__tittle">SEO (Optimización para motores de búsqueda)</h2>
        </div>
        <div class="window__main">
            <p class="window__description">
                Al momento de desarrollar sitios webs tomo mucho en cuenta el posicionamiento de su sitio web en los buscadores, de esta manera usted puede recibir mas visitas en su website
            </p>
        </div>
    </div>
</div>
<div class="box__expands">
    <span class="buttoms__expands">Secciones</span>
</div>
</div>`

corriculo = `<div class="corriculo__main">
<img src="assets/images/corriculo.jpg" alt="corriculo" class="corriculum">
<div class="content__corriculom">
    <p class="description__corriculom">
        Aqui pueden descargar mi corriculo por si quieren mas seguridad respecto a los servicios que ofrezco
    </p>
    <div class="buttoms__download">
        <a href="assets/documents/Corriculo.pdf" download="Corriculo" class="buttom__download">Descargar Corriculo PDF</a>
        <a href="assets/documents/Corriculo.jpg" download="Corriculo" class="buttom__download">Descargar Corriculo JPG</a>
    </div>
</div>
</div>`;
corriculo_mobile = `<div class="corriculo__main">
<img src="assets/images/corriculo.jpg" alt="corriculo" class="corriculum">
<div class="content__corriculom">
    <p class="description__corriculom">
        Aqui pueden descargar mi corriculo por si quieren mas seguridad respecto a los servicios que ofrezco
    </p>
    <div class="buttoms__download">
        <a href="assets/documents/Corriculo.pdf" download="Corriculo" class="buttom__download">Descargar Corriculo PDF</a>
        <a href="assets/documents/Corriculo.jpg" download="Corriculo" class="buttom__download">Descargar Corriculo JPG</a>
    </div>
</div>
<div class="box__expands">
    <span class="buttoms__expands">Secciones</span>
</div>
</div>`;

languages = `<div class="aside__content aside__content--2">
<div class="column__aside column--1">
    <h2 class="column_tittle">Front-end</h2>
    <div class="section__language">
    <div class="target__language">
        <img src="assets/images/html.png" alt="html-logo" class="img__icon">
        <div class="target__content">
        <h3 class="target_tittle">HTML</h3>
        <div class="icons__stars">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
        </div>
        </div>
    </div>
    <div class="target__language">
        <img src="assets/images/css.png" alt="html-logo" class="img__icon">
        <div class="target__content">
        <h3 class="target_tittle">CSS</h3>
        <div class="icons__stars">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
        </div>
        </div>
    </div>
    <div class="target__language">
        <img src="assets/images/js.png" alt="html-logo" class="img__icon">
        <div class="target__content">
        <h3 class="target_tittle">JS (JavaScript)</h3>
        <div class="icons__stars">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
        </div>
        </div>
    </div>
</div>
<div class="section__frameworks">
    <div class="target__language">
        <img src="assets/images/react.png" alt="html-logo" class="img__icon">
        <div class="target__content">
            <h3 class="target_tittle">REACT</h3>
        <div class="icons__stars">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            </div>
        </div>
    </div>
    <div class="target__language">
        <img src="assets/images/ionic.png" alt="html-logo" class="img__icon">
        <div class="target__content">
            <h3 class="target_tittle">IONIC</h3>
        <div class="icons__stars">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            </div>
        </div>
    </div>
</div>
</div>
<div class="column__aside column--1">
    <h2 class="column_tittle">Back-end</h2>
    <div class="section__language">
        <div class="target__language">
            <img src="assets/images/python.png" alt="html-logo" class="img__icon">
            <div class="target__content">
            <h3 class="target_tittle">PYTHON</h3>
            <div class="icons__stars">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                </div>
            </div>
        </div>
        <div class="target__language">
            <img src="assets/images/mysql.png" alt="html-logo" class="img__icon">
            <div class="target__content">
            <h3 class="target_tittle">MySQL</h3>
            <div class="icons__stars">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;
languages_mobile = `<div class="aside__content aside__content--2">
<div class="column__aside column--1">
    <h2 class="column_tittle">Front-end</h2>
    <div class="section__language">
    <div class="target__language">
        <img src="assets/images/html.png" alt="html-logo" class="img__icon">
        <div class="target__content">
        <h3 class="target_tittle">HTML</h3>
        <div class="icons__stars">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
        </div>
        </div>
    </div>
    <div class="target__language">
        <img src="assets/images/css.png" alt="html-logo" class="img__icon">
        <div class="target__content">
        <h3 class="target_tittle">CSS</h3>
        <div class="icons__stars">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
        </div>
        </div>
    </div>
    <div class="target__language">
        <img src="assets/images/js.png" alt="html-logo" class="img__icon">
        <div class="target__content">
        <h3 class="target_tittle">JS (JavaScript)</h3>
        <div class="icons__stars">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star.svg" alt="star" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
        </div>
        </div>
    </div>
</div>
<div class="section__frameworks">
    <div class="target__language">
        <img src="assets/images/react.png" alt="html-logo" class="img__icon">
        <div class="target__content">
            <h3 class="target_tittle">REACT</h3>
        <div class="icons__stars">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            </div>
        </div>
    </div>
    <div class="target__language">
        <img src="assets/images/ionic.png" alt="html-logo" class="img__icon">
        <div class="target__content">
            <h3 class="target_tittle">IONIC</h3>
        <div class="icons__stars">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
            </div>
        </div>
    </div>
</div>
</div>
<div class="column__aside column--1">
    <h2 class="column_tittle">Back-end</h2>
    <div class="section__language">
        <div class="target__language">
            <img src="assets/images/python.png" alt="html-logo" class="img__icon">
            <div class="target__content">
            <h3 class="target_tittle">PYTHON</h3>
            <div class="icons__stars">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                </div>
            </div>
        </div>
        <div class="target__language">
            <img src="assets/images/mysql.png" alt="html-logo" class="img__icon">
            <div class="target__content">
            <h3 class="target_tittle">MySQL</h3>
            <div class="icons__stars">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                <img src="assets/icon/star_border.svg" alt="star-border" class="icon__star">
                </div>
            </div>
        </div>
    </div>
    <div class="section__frameworks">
        
    </div>
</div>
<div class="box__expands">
    <span class="buttoms__expands">Secciones</span>
</div>
</div>`;

functionButtom = ()=>{
    for(i in buttomPush){
        if(buttomPush[i]==true){

            buttomContent[i].style=`background-color: var(--color);width: 80%;position: absolute;top: 0;right: 0;`;

            buttom[i].style=`width: 95%;left: 7%;`;

            indicator[i].style=`background-color: #00ff73;box-shadow: 0px 0px 10px 5px #00ff73;border-radius: 100px;animation-name: none;`;
        }
        else{
            buttomContent[i].style=`width: 100%;position: absolute;top: 0;right: 0;`;

            buttom[i].style=`width: 80%;`;

            indicator[i].style=`background-color: rgb(219, 69, 0);
            box-shadow: 0px 0px 10px 5px rgb(219, 69, 0);
            border-radius: 100px;animation-name: animation-aside__indicator;animation-duration: 2s;animation-iteration-count: infinite;`;
        }
    }
}
move = true;
aside__move = ()=>{
    if(move == false){
        move = true;
        aside__panel.style = `left: 0`
    }
    else{
        move = false;
        aside__panel.style = `left: -100vw`
    }
}
pushButtom1 = ()=>{
    buttomPush[0] = true;
    buttomPush[1] = false;
    buttomPush[2] = false;
    functionButtom();
    if(screen.availWidth < 820){
        console.log(`asdasdas`)
        mainView.innerHTML = services_mobile;
        const buttom__aside = document.querySelector(`.box__expands`);
        if(move == false){
            buttom__aside.addEventListener("click",aside__move);
        }
        else{
            buttom__aside.addEventListener("click",aside__move);
        }
        aside__move();
    }
    else{
        mainView.innerHTML = services;
    }
}
pushButtom2 = ()=>{
    buttomPush[0] = false;
    buttomPush[1] = true;
    buttomPush[2] = false;
    functionButtom();
    if(screen.availWidth < 820){
        mainView.innerHTML = corriculo_mobile;
        const buttom__aside = document.querySelector(`.box__expands`);
        if(move == false){
            buttom__aside.addEventListener("click",aside__move);
        }
        else{
            buttom__aside.addEventListener("click",aside__move);
        }
        aside__move();
    }
    else{
        mainView.innerHTML = corriculo;
    }
}
pushButtom3 = ()=>{
    buttomPush[0] = false;
    buttomPush[1] = false;
    buttomPush[2] = true;
    functionButtom();
    if(screen.availWidth < 820){
        mainView.innerHTML = languages_mobile;
        const buttom__aside = document.querySelector(`.box__expands`);
        if(move == false){
            buttom__aside.addEventListener("click",aside__move);
        }
        else{
            buttom__aside.addEventListener("click",aside__move);
        }
        aside__move();
    }
    else{
        mainView.innerHTML = languages;
    }
}

// pushButtom3();
pushButtom1();
buttom[0].addEventListener("click",pushButtom1);
buttom[1].addEventListener(`click`,pushButtom2);
buttom[2].addEventListener("click",pushButtom3);