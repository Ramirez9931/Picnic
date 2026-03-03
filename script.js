// Botón "Sí"
document.getElementById('btn-si').addEventListener('click', function () {
  document.getElementById('pregunta').classList.add('hidden');
  document.getElementById('carta').classList.remove('hidden');
});

// Botón "No" - NECIA en movimiento
document.getElementById('btn-no').addEventListener('click', function () {
  document.getElementById('pregunta').classList.add('hidden');
  const pantalla = document.getElementById('pantalla-necia');
  pantalla.classList.remove('hidden');

  const necias = [];
  const cantidad = 100;

  for (let i = 0; i < cantidad; i++) {
    const texto = document.createElement('div');
    texto.classList.add('necia-texto');
    texto.textContent = "NECIA";

    const tam = 20 + Math.random() * 40;
    texto.style.fontSize = tam + "px";

    let x = Math.random() * (window.innerWidth - tam * 2);
    let y = Math.random() * (window.innerHeight - tam * 2);

    const vx = (Math.random() - 0.5) * 10;
    const vy = (Math.random() - 0.5) * 10;

    pantalla.appendChild(texto);
    necias.push({ el: texto, x, y, vx, vy, tam });
  }

  function mover() {
    necias.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;

      if (n.x <= 0 || n.x >= window.innerWidth - n.tam * 2) n.vx *= -1;
      if (n.y <= 0 || n.y >= window.innerHeight - n.tam * 2) n.vy *= -1;

      n.el.style.transform = `translate(${n.x}px, ${n.y}px)`;
    });

    requestAnimationFrame(mover);
  }

  mover();
});

// Botón "Ver detalles"
document.getElementById('ver-detalles').addEventListener('click', function () {
  document.getElementById('carta').classList.add('hidden');
  document.getElementById('detalles').classList.remove('hidden');
});

// Mostrar frases
function mostrarFrase(frase) {
  document.getElementById('mensaje-interactivo').classList.remove('hidden');
  document.getElementById('frase').textContent = frase;
}