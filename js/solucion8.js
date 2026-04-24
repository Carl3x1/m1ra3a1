const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
function calcularMCD(e){
    e.preventDefault();
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    if(isNaN(a) || isNaN(b)){
        resultado.innerHTML = "Ingrese valores válidos";
        return;
    }
    let x = Math.abs(a);
    let y = Math.abs(b);
    while(y !== 0){
        let temp = y;
        y = x % y;
        x = temp;
    }
    let datos = "MCD: " + x;
    resultado.innerHTML = "<div class='alert alert-warning'>" + datos + "</div>";
    console.log(datos);
    alert(datos);
}
btnCalcular.addEventListener("click", calcularMCD);