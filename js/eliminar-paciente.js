var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

    tabla.addEventListener("dblclick",function(event){
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function(){
            event.target.parentNode.remove();
        },500);
        
        //alert("desea remover este paciente de la lista?")
        
    });