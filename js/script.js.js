// CAMBIO DE IDIOMA
document.getElementById('languageSelect')?.addEventListener('change', (e) => {
  const idioma = e.target.value;
  if (idioma === 'en') {
    document.getElementById('eslogan').textContent = 'Go viral with AI';
    document.getElementById('tituloPlataforma').textContent = "Let's create your viral TikTok";
    document.getElementById('descripcionPlataforma').textContent = 'Answer a few questions and get a ready-to-go idea to go viral.';
    document.getElementById('botonPlataforma').textContent = '🚀 Create my viral TikTok!';
  } else {
    document.getElementById('eslogan').textContent = 'Hazte viral con IA';
    document.getElementById('tituloPlataforma').textContent = 'Comencemos la creación de tu TikTok viral';
    document.getElementById('descripcionPlataforma').textContent = 'Responde unas preguntas y recibe una idea lista para triunfar en TikTok.';
    document.getElementById('botonPlataforma').textContent = '🚀 ¡Crear mi TikTok viral!';
  }
});

// ABRIR MODALES
document.getElementById("btnLogin")?.addEventListener("click", () => {
  document.getElementById("loginModal").classList.remove("hidden");
});

document.getElementById("btnPro")?.addEventListener("click", () => {
  document.getElementById("modalPro").classList.remove("hidden");
});

document.getElementById("btnContacto")?.addEventListener("click", () => {
  document.getElementById("modalContacto").classList.remove("hidden");
});

// CERRAR LOGIN
document.getElementById("btnCancelarLogin")?.addEventListener("click", () => {
  document.getElementById("loginModal").classList.add("hidden");
});
