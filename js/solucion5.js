const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");
const btnOrdenar = document.querySelector("#btnOrdenar");
const resultado = document.querySelector("#resultado");
function ordenarNumeros(e){
    e.preventDefault();
    let a = parseFloat(n1.value);
    let b = parseFloat(n2.value);
    let c = parseFloat(n3.value);

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        resultado.innerHTML = "Ingrese valores válidos";
        return;
    }
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    let datos = "Menor: " + numeros[0] +
                " | Medio: " + numeros[1] +
                " | Mayor: " + numeros[2];
    resultado.innerHTML = datos;
    console.log(datos);
}
btnOrdenar.addEventListener("click", ordenarNumeros);