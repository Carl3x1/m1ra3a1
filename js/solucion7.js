const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
function mostrarPares(e){
    e.preventDefault();
    let inicio = parseInt(num1.value);
    let fin = parseInt(num2.value);
    if(isNaN(inicio) || isNaN(fin)){
        resultado.innerHTML = "Ingrese valores válidos";
        return;
    }
    if(inicio > fin){
        let temp = inicio;
        inicio = fin;
        fin = temp;
    }
    let tabla = "<table class='table table-dark table-striped'>";
    tabla += "<thead><tr><th>Números pares</th></tr></thead><tbody>";
    for(let i = inicio; i <= fin; i++){
        if(i % 2 === 0){
            tabla += "<tr><td>" + i + "</td></tr>";
        }
    }
    tabla += "</tbody></table>";
    resultado.innerHTML = tabla;
    console.log("Pares mostrados");
}
btnCalcular.addEventListener("click", mostrarPares);