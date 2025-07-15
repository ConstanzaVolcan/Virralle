document.addEventListener("DOMContentLoaded", function() {
  // Elementos principales
  const contenedor = document.getElementById("contenedorPrincipal");
  const titulo = document.getElementById("tituloPlataforma");
  const descripcion = document.getElementById("descripcionPlataforma");
  const input = document.getElementById("inputPlataforma");
  const boton = document.getElementById("botonPlataforma");
  
  // Botones de navegación
  const btnTikTok = document.getElementById("btnTikTok");
  const btnInstagram = document.getElementById("btnInstagram");
  const btnYouTube = document.getElementById("btnYouTube");
  const btnLogin = document.getElementById("btnLogin");
  
  // Elementos del modal
  const loginModal = document.getElementById("loginModal");
  const btnCancelarLogin = document.getElementById("btnCancelarLogin");
  const btnIniciarSesion = document.getElementById("btnIniciarSesion");

  // Función para cambiar plataforma
  function cambiarPlataforma(plataforma) {
    // Resetear clases
    contenedor.className = "bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-lg max-w-xl mx-auto";
    
    switch(plataforma) {
      case "tiktok":
        contenedor.classList.add("tiktok-style");
        titulo.textContent = "Comencemos la creación de tu TikTok viral";
        descripcion.textContent = "Responde unas preguntas y recibe una idea lista para triunfar en TikTok.";
        input.placeholder = "¡Cuéntanos tu idea para TikTok!";
        boton.textContent = "🚀 ¡Crear mi TikTok viral!";
        break;
      case "instagram":
        contenedor.classList.add("instagram-style");
        titulo.textContent = "Crea un post viral en Instagram";
        descripcion.textContent = "Haz que tu contenido destaque en Instagram con una idea viral.";
        input.placeholder = "¡Cuéntanos tu idea para Instagram!";
        boton.textContent = "📸 ¡Crear mi post viral!";
        break;
      case "youtube":
        contenedor.classList.add("youtube-style");
        titulo.textContent = "Hazte viral en YouTube con esta idea";
        descripcion.textContent = "Planifica tu video viral con ayuda de IA.";
        input.placeholder = "¡Cuéntanos tu idea para YouTube!";
        boton.textContent = "🎬 ¡Crear mi YouTube viral!";
        break;
    }
  }

  // Funciones para el modal
  function abrirLogin() {
    loginModal.classList.remove("hidden");
  }

  function cerrarLogin() {
    loginModal.classList.add("hidden");
  }

  // Event Listeners
  btnTikTok.addEventListener("click", function(e) {
    e.preventDefault();
    cambiarPlataforma("tiktok");
  });

  btnInstagram.addEventListener("click", function(e) {
    e.preventDefault();
    cambiarPlataforma("instagram");
  });

  btnYouTube.addEventListener("click", function(e) {
    e.preventDefault();
    cambiarPlataforma("youtube");
  });

  btnLogin.addEventListener("click", function(e) {
    e.preventDefault();
    abrirLogin();
  });

  btnCancelarLogin.addEventListener("click", function(e) {
    e.preventDefault();
    cerrarLogin();
  });

  btnIniciarSesion.addEventListener("click", function(e) {
    e.preventDefault();
    alert("Inicio de sesión simulado");
    cerrarLogin();
  });

  // Inicializar con TikTok
  cambiarPlataforma("tiktok");
});