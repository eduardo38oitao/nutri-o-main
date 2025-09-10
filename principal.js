//esse bloco vai alterar o nome do titulo e substitulo
var tSegundario = document.querySelector(".titulo-segundario");
var titulo = document.querySelector(".titulo");
tSegundario.textcontent = "meus pacientes";
titulo.textcontent = "Eduardo nutri";

//esse vai criar variavel buscar id do primeiro paciente e acessa o peso do primeiro paciente 
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
  
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    //buscar o elemento da altura e altera seu conteudo
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    //calcule o IMC e altera no elemento
    var IMC = peso / (altura * altura);
    
    //valores booleanos
    var pesoValido = true;
    var alturaValida = true;

     if(pesoValido && alturaValida)
        {var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.textContent = IMC.toFixed(2);
        
    }
    //alerta caso peso e altura sejam invalidos
    if(peso <= 0 || peso >= 1000 ){
        console.log("peso invalido!");
        var pesoValido = false;
         tdIMC.textContent = "peso invalido";
         paciente.classList.add("paciente-invalido")
      }  
    if (altura <= 0 || altura >= 3.00 ){
        alert("altura invalida!");
        var alturaValida = false;
        tdIMC.textContent = "altura invalida";
        paciente.classList.add("paciente-invalido")
     }
    
}


titulo.addEventListener('click', function(){
    alert("clicou nessa bomba");
});


