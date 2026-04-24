const texto = document.querySelector("#texto");
const btnMostrar = document.querySelector("#btnMostrar");
const resultado = document.querySelector("#resultado");
function mostrarDeDos(e){
    e.preventDefault();
    let cadena = texto.value;
    if(cadena.trim() === ""){
        resultado.innerHTML = "Ingrese un texto válido";
        return;
    }
    let tabla = "<table class='table table-dark table-striped'>";
    tabla += "<thead><tr><th>Caracteres</th></tr></thead><tbody>";
    for(let i = 0; i < cadena.length; i += 2){
        let par = cadena.substring(i, i + 2);
        tabla += "<tr><td>" + par + "</td></tr>";
    }
    tabla += "</tbody></table>";
    resultado.innerHTML = tabla;
    console.log("Texto procesado");
}
btnMostrar.addEventListener("click", mostrarDeDos);