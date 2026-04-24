const numero = document.querySelector("#numero");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
function tablaMultiplicar(e){
    e.preventDefault();
    let valor = parseFloat(numero.value);
    if(isNaN(valor)){
        resultado.innerHTML = "Ingrese un número válido";
        return;
    }
    let tabla = "<table class='table table-dark table-striped'>";
    tabla += "<thead><tr><th>Operación</th><th>Resultado</th></tr></thead><tbody>";
    for(let i = 1; i <= 10; i++){
        tabla += "<tr>";
        tabla += "<td>" + valor + " x " + i + "</td>";
        tabla += "<td>" + (valor * i) + "</td>";
        tabla += "</tr>";
    }
    tabla += "</tbody></table>";
    resultado.innerHTML = tabla;
    console.log("Tabla generada");
}
btnCalcular.addEventListener("click", tablaMultiplicar);