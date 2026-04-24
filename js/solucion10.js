const texto = document.querySelector("#texto");
const palabra = document.querySelector("#palabra");
const btnBuscar = document.querySelector("#btnBuscar");
const resultado = document.querySelector("#resultado");

function contarPalabra(e){
    e.preventDefault();

    let cadena = texto.value.toLowerCase();
    let buscar = palabra.value.toLowerCase();

    if(cadena.trim() === "" || buscar.trim() === ""){
        resultado.innerHTML = "Ingrese datos válidos";
        return;
    }

    let contador = 0;
    let posicion = 0;

    while((posicion = cadena.indexOf(buscar, posicion)) !== -1){
        contador++;
        posicion += buscar.length;
    }

    let datos = "La palabra se repite: " + contador + " veces";

    resultado.innerHTML = datos;
    console.log(datos);
}

btnBuscar.addEventListener("click", contarPalabra);