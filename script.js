document.getElementById('publicaciones-btn').addEventListener('click', function() {
    const asteroide = document.getElementById('asteroide');
    
    // Mostrar el GIF del asteroide
    asteroide.style.display = 'block';
    
    // Aplicar animación de movimiento
    asteroide.style.animation = 'fly-across 5s linear forwards';

    // Ocultar el asteroide después de la animación
    setTimeout(function() {
        asteroide.style.display = 'none';
    }, 5000); // Ocultar el GIF después de 5 segundos
});
