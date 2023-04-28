let menu = document.getElementById("menu");
let mostrar = document.getElementById("mostrar");
let ocultar = document.getElementById("ocultar");
let enlaces= document.querySelectorAll('.container-menu a[href^="#"]');
mostrar.addEventListener("click",()=>{
 menu.classList.add("visible");
})
ocultar.addEventListener("click",()=>{
    menu.classList.remove("visible");
   })

enlaces.forEach(enlace=> {
    enlace.addEventListener("click",()=>{
  menu.classList.remove("visible")
   });

})

const main = document.getElementById("nav");
window.addEventListener("scroll", function(){
  main.classList.toggle("scroll", window.scrollY>440);
})
