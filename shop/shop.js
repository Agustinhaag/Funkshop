let btn = document.querySelectorAll(".btn");     
for (let i = 0; i < btn.length; i++) {
   btn[i].addEventListener("click", ()=>{
    document.querySelector(".botones .btn-click").classList.remove("btn-click"); 
    btn[i].classList.add("btn-click");
   })
    if (i===1){
     btn[i].classList.add("btn-click");
    }
}
 