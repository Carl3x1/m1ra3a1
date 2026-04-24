const numero = document.querySelector("#numero");
const btnEvaluar = document.querySelector("#btnEvaluar");
const resultado = document.querySelector("#resultado");
function evaluarNumero(e){
    e.preventDefault();
    let valor = parseFloat(numero.value);
    let mensaje = "";
    if(valor > 0){
        mensaje = "El número es positivo";
    } else if(valor < 0){
        mensaje = "El número es negativo";
    } else {
        mensaje = "El número es neutro";
    }
    resultado.innerHTML = mensaje;
    console.log(mensaje);
}
btnEvaluar.addEventListener("click", evaluarNumero);