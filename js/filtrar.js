var campoFiltro = document.querySelector("#filtrar-tabla");


campoFiltro.addEventListener("input",function(){
    
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){


    
        for(i = 0; i < pacientes.length;i++){
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            //var expesion = new RegExp(this.value, "i");
            
            
            /*if (!expesion.test(nombre)){
                paciente.classList.add('invisible');
            }else{
                paciente.classList.remove('invisible');
            };*/
            var comparar = nombre.substring(0, this.value.length);
            var compararMinuscula = comparar.toLowerCase();
            var valorDigitadoMinuscula = this.value.toLowerCase();
                if(!(valorDigitadoMinuscula  == compararMinuscula )){
                    paciente.classList.add("invisible");
                } else {
                    paciente.classList.remove("invisible");
            };       
        };

        
    }else{
        for(i = 0; i < pacientes.length;i++){
            var paciente = pacientes[i];
            paciente.classList.remove('invisible');
        };
    }


});