const btnEjecutar = document.querySelector("#btnEjecutar");
const valor1 = document.querySelector("#txtValor1")
const valor2 = document.querySelector("#txtValor2")
const  incremento = document.querySelector("#txtIncremento")
function llamarFunciones(){
    generarContinuos();
    numerosDescendentes();
}

function generarContinuos(e){
    console.log("numeros del 1 al 10;");
    for (let i = 1; i <= 10; i++) {
        console.log (i);
    }
}
function numerosDescendentes(e){
    console.log("numeros descendentes")
    for (let i = 25; i >=5; i--) {
        console.log (i);
    }
}
function incremento2(){
    console.log("ciclo de incremento de 2");
    for (let j = 2; j < 20; j+=2) {
        console.log(j);
    }
}
function sisi(){
    console.log("sisi");
    for (let k = 1000; k >=600; k-=8) {
        console.log (k);
    }
}
function generarNumeros(e){
    e.preventDefault();
    for (let i=Number(valor1.value);i<=Number(valor2.value);i+=Number(incremento.value)) {
        console.log(i);
    }
}

//estableciendo evento click en el boton e indicar que funcion se ejecutara
btnContinuos.addEventListener("click", generarNumeros);