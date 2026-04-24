const nombre = document.querySelector("#txtNombre");
const curso = document.querySelector("#txtCurso");
const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");
const n4 = document.querySelector("#n4");
const n5 = document.querySelector("#n5");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
function calcularPromedio(e){
    e.preventDefault();
    let nota1 = parseFloat(n1.value);
    let nota2 = parseFloat(n2.value);
    let nota3 = parseFloat(n3.value);
    let nota4 = parseFloat(n4.value);
    let nota5 = parseFloat(n5.value);
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    let datos = "Nombre: " + nombre.value + 
                " | Curso: " + curso.value + 
                " | Promedio: " + promedio.toFixed(2);
    alert(datos);
    resultado.innerHTML = datos;
    console.log(datos);
}
btnCalcular.addEventListener("click", calcularPromedio);