document.getElementById('btn-si').addEventListener('click', function() {
  document.getElementById('pregunta').classList.add('hidden');
  document.getElementById('carta').classList.remove('hidden');
});

document.getElementById('btn-no').addEventListener('click', function() {
  alert('¡Tal vez otra vez!');
});

document.getElementById('ver-detalles').addEventListener('click', function() {
  setTimeout(() => {
    document.getElementById('carta').classList.add('hidden');
    document.getElementById('detalles').classList.remove('hidden');
  }, 500); // Añadimos un pequeño retraso para suavizar el cambio
});

function mostrarFrase(frase) {
  document.getElementById('mensaje-interactivo').classList.remove('hidden');
  document.getElementById('frase').textContent = frase;
}