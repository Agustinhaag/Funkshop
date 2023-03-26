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