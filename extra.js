/* variable para controlar mostrar/ocultar texto */
let cant=1;
/* sentencia para que aparezca el texto oculto swasw wl inicio */
document.getElementById("extras").style.display='none'
/* evento que dispara los cambios al presionar el boton en la pagina */
document.getElementById("leo").onclick = function() {
    console.log("valor de cant: " +cant)
    
    if (esPar(cant) ==0){
        document.getElementById("extras").style.display='block'
        document.getElementById("leo").innerText="Volver a presionar para ocultar"
        console.log("Mostrar: " +cant)
    } else {
        document.getElementById("extras").style.display='none'
        document.getElementById("leo").innerText="Presionar para ver más información"
        console.log("ocultar: " +cant)
    }
    cant++;
    console.log("valor de cant: " +cant)
}

function esPar(numero) 
{ 
  return (numero % 2) == 0; 
}
