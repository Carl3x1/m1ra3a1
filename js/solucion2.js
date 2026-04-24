const catetoA = document.querySelector("#catetoA");
const catetoB = document.querySelector("#catetoB");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
function calcularHipotenusa(e) {
    e.preventDefault();
    let a = parseFloat(catetoA.value);
    let b = parseFloat(catetoB.value);
    let hipotenusa = Math.sqrt(a * a + b * b);
    let datos = "Hipotenusa: " + hipotenusa.toFixed(2);
    alert(datos);
    console.log(datos);
    resultado.innerHTML = datos;
}
btnCalcular.addEventListener("click", calcularHipotenusa);
