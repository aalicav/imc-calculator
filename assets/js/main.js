document.querySelector(".container #resultado").style.display = 'none';
function calculaImc(){
let peso = Number(document.querySelector("#peso").value.replace(',','.'));
let altura = Number(document.querySelector("#altura").value.replace(',','.'));
if (isNaN(peso)||isNaN(altura)||altura==''||peso==''){
  document.querySelector(".container #resultado").style.background = 'red';
  document.querySelector(".container #resultado").style.color = 'white';
  document.querySelector(".container #resultado").style.display = 'block';
  document.querySelector("#resultado").textContent = 'Valor invalido! Digite somente números.';
}else{
document.querySelector(".container #resultado").style.display = 'block';
let imc = peso/(altura**2);
nivelImc=()=>{
const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

if (imc >= 39.9) return nivel[5];
if (imc >= 34.9) return nivel[4];
if (imc >= 29.9) return nivel[3];
if (imc >= 24.9) return nivel[2];
if (imc >= 18.5) return nivel[1];
if (imc < 18.5) return nivel[0];
};
document.querySelector("#resultado").textContent = `Seu imc é ${imc.toFixed(2)} e você está ${nivelImc()}`;
}
};  
