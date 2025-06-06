function mostrarSorpresa() {
  document.getElementById("sorpresa").style.display = "block";
}

function apagarVelas() {
  document.getElementById("fuego1").style.display = "none";
  document.getElementById("fuego2").style.display = "none";
  document.getElementById("fuego3").style.display = "none";
}

function toggleMusica() {
  const musica = document.getElementById("musicaFondo");
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
for (let i = 0; i < 20; i++) {
  const globo = document.createElement("div");
  globo.className = "globos";
  globo.style.left = Math.random() * 100 + "vw";
  globo.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
  globo.style.animationDuration = (Math.random() * 3 + 4) + "s";
  document.body.appendChild(globo);
}
function mostrarImagenCompleta(src) {
  const modal = document.getElementById('modal');
  const modalImagen = document.getElementById('modal-imagen');
  modal.style.display = 'flex';
  modalImagen.src = src;
}

// Cerrar el modal al hacer clic
function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}
