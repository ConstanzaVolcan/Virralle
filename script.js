document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const contenedorPrincipal = document.getElementById("contenedorPrincipal");
  const tituloPlataforma = document.getElementById("tituloPlataforma");
  const descripcionPlataforma = document.getElementById("descripcionPlataforma");
  const inputPlataforma = document.getElementById("inputPlataforma");
  const botonPlataforma = document.getElementById("botonPlataforma");
  
  // Botones de navegación
  const btnTikTok = document.getElementById("btnTikTok");
  const btnInstagram = document.getElementById("btnInstagram");
  const btnYouTube = document.getElementById("btnYouTube");
  const btnLogin = document.getElementById("btnLogin");
  const btnPro = document.getElementById("btnPro");
  const btnContacto = document.getElementById("btnContacto");
  
  // Elementos de modales
  const loginModal = document.getElementById("loginModal");
  const registroModal = document.getElementById("registroModal");
  const btnCancelarLogin = document.getElementById("btnCancelarLogin");
  const btnIniciarSesion = document.getElementById("btnIniciarSesion");
  const btnAbrirRegistro = document.getElementById("btnAbrirRegistro");
  const btnCancelarRegistro = document.getElementById("btnCancelarRegistro");
  const btnRegistrar = document.getElementById("btnRegistrar");

  // Función para cambiar entre plataformas
  function cambiarPlataforma(plataforma) {
    // Resetear clases de estilo
    contenedorPrincipal.className = "bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-lg w-full max-w-xl flex flex-col items-center gap-6";
    
    switch(plataforma) {
      case "tiktok":
        contenedorPrincipal.classList.add("tiktok-style");
        tituloPlataforma.textContent = "Comencemos la creación de tu TikTok viral";
        descripcionPlataforma.textContent = "Responde unas preguntas y recibe una idea lista para triunfar en TikTok.";
        inputPlataforma.placeholder = "¡Cuéntanos tu idea para TikTok!";
        botonPlataforma.textContent = "🚀 ¡Crear mi TikTok viral!";
        break;
      case "instagram":
        contenedorPrincipal.classList.add("instagram-style");
        tituloPlataforma.textContent = "Crea un post viral en Instagram";
        descripcionPlataforma.textContent = "Haz que tu contenido destaque en Instagram con una idea viral.";
        inputPlataforma.placeholder = "¡Cuéntanos tu idea para Instagram!";
        botonPlataforma.textContent = "📸 ¡Crear mi post viral!";
        break;
      case "youtube":
        contenedorPrincipal.classList.add("youtube-style");
        tituloPlataforma.textContent = "Hazte viral en YouTube con esta idea";
        descripcionPlataforma.textContent = "Planifica tu video viral con ayuda de IA.";
        inputPlataforma.placeholder = "¡Cuéntanos tu idea para YouTube!";
        botonPlataforma.textContent = "🎬 ¡Crear mi YouTube viral!";
        break;
    }
  }

  // Funciones para manejar modales
  function abrirModal(modal) {
    modal.classList.remove("hidden");
  }

  function cerrarModal(modal) {
    modal.classList.add("hidden");
  }

  // Event listeners para botones de plataforma
  if (btnTikTok) btnTikTok.addEventListener("click", (e) => {
    e.preventDefault();
    cambiarPlataforma("tiktok");
  });

  if (btnInstagram) btnInstagram.addEventListener("click", (e) => {
    e.preventDefault();
    cambiarPlataforma("instagram");
  });

  if (btnYouTube) btnYouTube.addEventListener("click", (e) => {
    e.preventDefault();
    cambiarPlataforma("youtube");
  });

  // Event listeners para modales
  if (btnLogin) btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal(loginModal);
  });

  if (btnPro) btnPro.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Funcionalidad PRO - En desarrollo");
  });

  if (btnContacto) btnContacto.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Formulario de contacto - En desarrollo");
  });

  if (btnCancelarLogin) btnCancelarLogin.addEventListener("click", (e) => {
    e.preventDefault();
    cerrarModal(loginModal);
  });

  if (btnIniciarSesion) btnIniciarSesion.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Inicio de sesión simulado");
    cerrarModal(loginModal);
  });

  if (btnAbrirRegistro) btnAbrirRegistro.addEventListener("click", (e) => {
    e.preventDefault();
    cerrarModal(loginModal);
    abrirModal(registroModal);
  });

  if (btnCancelarRegistro) btnCancelarRegistro.addEventListener("click", (e) => {
    e.preventDefault();
    cerrarModal(registroModal);
  });

  if (btnRegistrar) btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Registro simulado - Cuenta creada");
    cerrarModal(registroModal);
  });

  // Inicializar con TikTok por defecto
  cambiarPlataforma("tiktok");
});