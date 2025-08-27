//
var pacientes = document.querySelector(".titulo-segundario");
var titulo = document.querySelector(".titulo");
pacientes.textcontent = "meus pacientes";
pacientes.textcontent = "Eduardo nutri";

//
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//
var IMC = peso / (altura * altura);
var tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = IMC;

console.log(IMC);