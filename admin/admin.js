
let borrar = document.querySelectorAll(".delete"); 
borrar.forEach(b =>{
    b.addEventListener("click",()=>{
        const row = b.closest("tr");
        row.style.display = "none";
    })
})

