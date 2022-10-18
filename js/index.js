const cafe_negro = document.querySelector("#cafe-negro");
const cookies = document.querySelector("#galletas");
const cafe_leche = document.querySelector("#cafe-leche");

const modal = document.querySelector(".modal");

const botonCerrar= document.querySelector(".modal__content__close");

/*Eventos*/

cafe_negro.addEventListener("click", ()=>{
    modal.classList.remove("ocuta-modal");
    modal.classList.add("mostrar-modal");
});

cookies.addEventListener("click", ()=>{
    modal.classList.remove("ocuta-modal");
    modal.classList.add("mostrar-modal");
});

cafe_leche.addEventListener("click", ()=>{
    modal.classList.remove("ocuta-modal");
    modal.classList.add("mostrar-modal");
});

botonCerrar.addEventListener("click", ()=>{
    modal.classList.add("ocuta-modal");
    modal.classList.remove("mostrar-modal");
});