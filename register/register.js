
let form = document.getElementById("form");
let usuario =document.getElementById("user");
let password =document.getElementById("password");
let nombre = document.getElementById("name");
let username= document.getElementById("surname");
let password2= document.getElementById("password2");
let check= document.getElementById("check");
form.addEventListener("submit", e =>{
    e.preventDefault(),
    checkedinput();
});

function checkedinput(){ 
    let nuevousuario= usuario.value.trim();
    let nuevopassword= password.value.trim();
    let nuevoname= nombre.value.trim();
    let nuevosurname= surname.value.trim();
    let newpassword= password2.value.trim();
    let nuevocheck= check.checked;  

    if(nuevousuario===""){
        setError(usuario,"El campo email no puede quedar vacio");
    }else{ 
        succes(usuario);  
    }  
    if(nuevopassword===""){
        setError(password,"El campo password no puede quedar vacio");
    }else{
        succes(password);
    }
    if(nuevoname===""){
        setError(nombre,"El campo nombre no puede quedar vacio");
    }else{
        succes(nombre);
    }
    if(nuevosurname===""){
        setError(surname,"El campo apellido no puede quedar vacio");
    }else{
        succes(surname);
    }
    if(newpassword===""){
        setError(password2,"Debe repetir su contraseña");
    }else{
        succes(password2);
    }
    if(!nuevocheck){ 
        setError(check,"Debe aceptar los terminos y condiciones");
    }else{
        succes(check);
    }
     if(newpassword === nuevopassword){         
        succes("")
    }else{
        setError(password2,"las contraseñas no coinciden")
    }
}
function setError(input, mensaje){              
 let elemenpadre= input.parentElement;      
 let small= elemenpadre.querySelector("small");  
 elemenpadre.className="inputerror";  
 small.innerText= mensaje;
}
function succes(input){
 let elemenpadre= input.parentElement;
 let small= elemenpadre.querySelector("small");
 elemenpadre.className="inputsucces";
 small.innerText="";
 form.submit();
}