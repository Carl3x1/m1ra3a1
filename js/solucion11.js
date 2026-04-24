function generarNumeros() {
    const input = document.getElementById('numero').value;
    const valor = parseInt(input, 10);
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = '';

    if (isNaN(valor) || valor < 1) {
        resultadoDiv.innerHTML = "<p class='error'>Por favor, ingresa un número entero válido mayor a 0.</p>";
        return;
    }

    // Para no bloquear la página si el número es inmensamente grande
    const limite = Math.min(valor, 10000); 
    
    let htmlContent = '';
    for (let i = 1; i <= limite; i++) {
        // Agregar un pequeño retraso a la animación basado en el índice para efecto cascada (limitado a los primeros 50 para rendimiento)
        const delay = i <= 50 ? (i * 0.02) : 0;
        htmlContent += `<span class="number-tag" style="animation-delay: ${delay}s">${i}</span>`;
    }
    
    if (valor > 10000) {
        htmlContent += `<p style="margin-top: 15px; color: #94a3b8; font-size: 13px;"><em>Mostrando los primeros 10,000 números por rendimiento.</em></p>`;
    }

    resultadoDiv.innerHTML = htmlContent;
}
