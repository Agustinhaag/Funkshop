
let nombre= document.getElementById("name");
let descripcion= document.getElementById("descripcion");
let sku= document.getElementById("sku");
let precio= document.getElementById("precio");
let stock= document.getElementById("stock");
let descuento= document.getElementById("descuento");
let form = document.getElementById("form");
let cuota= document.getElementById("cuotas");
let licencia =document.getElementById("licencia");
let categoria =document.getElementById("categoria");

form.addEventListener("submit", e =>{
    e.preventDefault(),
    checkedinput();
});

function checkedinput(){ 
    let nuevoname= nombre.value.trim();
    let nuevadescripcion= descripcion.value.trim();
    let nuevosku= sku.value.trim();
    let nuevoprecio= precio.value.trim();
    let nuevostock= stock.value.trim();
    let nuevodescuento= descuento.value.trim();

    if(nuevoname===""){
        setError(nombre,"El campo nombre no puede quedar vacio");
    }else{
        succes(nombre);
    }
    if(nuevadescripcion===""){
        setError(descripcion,"Debe ingresar una descripción");
    }else{
        succes(descripcion);
    }
    if(nuevosku===""){
        setError(sku,"Ingrese un sku");
    }else{
        succes(sku);
    }
    if(nuevoprecio===""){
        setError(precio,"Ingrese el precio");
    }else{
        succes(precio);
    }
    if(nuevostock===""){
        setError(stock,"Ingrese el stock");
    }else{
        succes(stock);
    }
    if(nuevodescuento===""){
        setError(descuento,"Ingrese el descuento");
    }else{
        succes(descuento);
    }
    if (cuota.selectedIndex === 0) {
       setError(cuota, "Debe seleccionar una opcion");
      }else{
     succes(cuota);
    }
    if (licencia.selectedIndex === 0) {
        setError(licencia, "Debe seleccionar una licencia");
    }else{
      succes(licencia);
    }
    if (categoria.selectedIndex === 0) {
        setError(categoria, "Debe seleccionar una categoría");
    }else{
      succes(categoria);
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
    small.innerText="";
    form.submit();
   }
 