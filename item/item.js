document.querySelector("#menos").addEventListener("click", restar);
document.querySelector("#mas").addEventListener("click", sumar);
let contador =0;
let cantidad= document.querySelector("#cantidad");
function sumar (){
contador= contador +1;
cantidad.value= contador;
}
function restar (){
    contador= contador -1;
    cantidad.value= contador;
   if(cantidad.value<0){
    contador=0;
    cantidad.value=0;
   }
}
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
  menu.classList.remove("visible");
   });

})
const main = document.getElementById("nav");
window.addEventListener("scroll", function(){
  main.classList.toggle("scroll", window.scrollY>0);
})
