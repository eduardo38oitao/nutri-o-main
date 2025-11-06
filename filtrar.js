const campofitro = document.querySelector("#filtrar-tabela")

campofitro.addEventListener('input',function(){
    this.value;

    const pacientes = document.querySelectorAll(".paciente");

    //verificar se tem algo digitado
    if(this.value.length > 0){
        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            
            //adiciona e remove a classe invisivel
            if(nome != this.value){
                paciente.classList.add("invisivel");
            }
        }
    }else{
        for(i = 0; i < pacientes.length; i++){
            let paciente =pacientes[i];


        paciente.classList.remove("invisivel");
        }
    }

    
});