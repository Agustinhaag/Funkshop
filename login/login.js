
let form = document.getElementById("form");
let usuario =document.getElementById("user");
let password =document.getElementById("password");
form.addEventListener("submit", e =>{
    e.preventDefault(),
    checkedinput();
});

function checkedinput(){ 
    let nuevousuario= usuario.value.trim();
    let nuevopassword = password.value.trim();
    let valido = true;
    if(nuevousuario===""){
        setError(usuario, "El campo email no puede quedar vacio");
        valido = false
    }else{ 
        succes(usuario);  
    }  
    if(nuevopassword===""){
        setError(password, "El campo password no puede quedar vacio");
        valido= false
    }else{
        succes(password);
    }
    if (valido) {
         form.submit();
    }
}
function setError(div, mensaje){              
 let elemenpadre= div.parentElement;
 let small= elemenpadre.querySelector("small");
 elemenpadre.className="inputerror";
 small.innerText= mensaje;
}
function succes(input){
 let elemenpadre= input.parentElement;
 let small= elemenpadre.querySelector("small");
 elemenpadre.className="inputsucces";
 small.innerText="";
}