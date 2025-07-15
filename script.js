document.addEventListener("DOMContentLoaded", () => {
  window.abrirLogin = function () {
    document.getElementById("loginModal").classList.remove("hidden");
  };

  window.cerrarLogin = function () {
    document.getElementById("loginModal").classList.add("hidden");
  };

  window.iniciarSesion = function () {
    alert("Sesión iniciada (simulada)");
    cerrarLogin();
  };

  window.abrirRegistro = function () {
    cerrarLogin();
    document.getElementById("registroModal").classList.remove("hidden");
  };

  window.cerrarRegistro = function () {
    document.getElementById("registroModal").classList.add("hidden");
  };

  window.registrarCuenta = function () {
    alert("Cuenta creada (simulada)");
    cerrarRegistro();
    abrirLogin();
  };

  // Cambiar plataforma visual
  const contenedor = document.getElementById("contenedorPrincipal");
  const titulo = document.getElementById("tituloPlataforma");
  const descripcion = document.getElementById("descripcionPlataforma");
  const placeholder = document.getElementById("inputPlataforma");
  const boton = document.getElementById("botonPlataforma");

  function cambiarPlataforma(nueva) {
    contenedor.classList.remove("tiktok-style", "instagram-style", "youtube-style");

    if (nueva === "tiktok") {
      contenedor.classList.add("tiktok-style");
      titulo.textContent = "Comencemos la creación de tu TikTok viral";
      descripcion.textContent = "Responde unas preguntas y recibe una idea lista para triunfar en TikTok.";
      placeholder.placeholder = "¡Cuéntanos tu idea para TikTok!";
      boton.textContent = "🚀 ¡Crear mi TikTok viral!";
    } else if (nueva === "instagram") {
      contenedor.classList.add("instagram-style");
      titulo.textContent = "Crea un post viral en Instagram";
      descripcion.textContent = "Haz que tu contenido destaque en Instagram con una idea viral.";
      placeholder.placeholder = "¡Cuéntanos tu idea para Instagram!";
      boton.textContent = "📸 ¡Crear mi post viral!";
    } else if (nueva === "youtube") {
      contenedor.classList.add("youtube-style");
      titulo.textContent = "Hazte viral en YouTube con esta idea";
      descripcion.textContent = "Planifica tu video viral con ayuda de IA.";
      placeholder.placeholder = "¡Cuéntanos tu idea para YouTube!";
      boton.textContent = "🎬 ¡Crear mi YouTube viral!";
    }
  }

  document.getElementById("btnTikTok").addEventListener("click", () => cambiarPlataforma("tiktok"));
  document.getElementById("btnInstagram").addEventListener("click", () => cambiarPlataforma("instagram"));
  document.getElementById("btnYouTube").addEventListener("click", () => cambiarPlataforma("youtube"));
});
document.addEventListener("DOMContentLoaded", () => {
  // LOGIN
  window.abrirLogin = function () {
    document.getElementById("loginModal").classList.remove("hidden");
  };

  window.cerrarLogin = function () {
    document.getElementById("loginModal").classList.add("hidden");
  };

  window.iniciarSesion = function () {
    alert("Sesión iniciada (simulada)");
    cerrarLogin();
  };

  // REGISTRO
  window.abrirRegistro = function () {
    cerrarLogin();
    document.getElementById("registroModal").classList.remove("hidden");
  };

  window.cerrarRegistro = function () {
    document.getElementById("registroModal").classList.add("hidden");
  };

  window.registrarCuenta = function () {
    alert("Cuenta creada (simulada)");
    cerrarRegistro();
    abrirLogin();
  };

  // CONTACTO
  window.abrirContacto = function () {
    document.getElementById("modalContacto").classList.remove("hidden");
  };

  window.cerrarContacto = function () {
    document.getElementById("modalContacto").classList.add("hidden");
  };

  // PRO
  window.abrirModalPro = function () {
    document.getElementById("modalPro").classList.remove("hidden");
  };

  window.cerrarModalPro = function () {
    document.getElementById("modalPro").classList.add("hidden");
  };

  // PLATAFORMAS
  const contenedor = document.getElementById("contenedorPrincipal");
  const titulo = document.getElementById("tituloPlataforma");
  const descripcion = document.getElementById("descripcionPlataforma");
  const placeholder = document.getElementById("inputPlataforma");
  const boton = document.getElementById("botonPlataforma");

  function cambiarPlataforma(nueva) {
    contenedor.classList.remove("tiktok-style", "instagram-style", "youtube-style");

    if (nueva === "tiktok") {
      contenedor.classList.add("tiktok-style");
      titulo.textContent = "Comencemos la creación de tu TikTok viral";
      descripcion.textContent = "Responde unas preguntas y recibe una idea lista para triunfar en TikTok.";
      placeholder.placeholder = "¡Cuéntanos tu idea para TikTok!";
      boton.textContent = "🚀 ¡Crear mi TikTok viral!";
    } else if (nueva === "instagram") {
      contenedor.classList.add("instagram-style");
      titulo.textContent = "Crea un post viral en Instagram";
      descripcion.textContent = "Haz que tu contenido destaque en Instagram con una idea viral.";
      placeholder.placeholder = "¡Cuéntanos tu idea para Instagram!";
      boton.textContent = "📸 ¡Crear mi post viral!";
    } else if (nueva === "youtube") {
      contenedor.classList.add("youtube-style");
      titulo.textContent = "Hazte viral en YouTube con esta idea";
      descripcion.textContent = "Planifica tu video viral con ayuda de IA.";
      placeholder.placeholder = "¡Cuéntanos tu idea para YouTube!";
      boton.textContent = "🎬 ¡Crear mi YouTube viral!";
    }
  }

  document.getElementById("btnTikTok")?.addEventListener("click", () => cambiarPlataforma("tiktok"));
  document.getElementById("btnInstagram")?.addEventListener("click", () => cambiarPlataforma("instagram"));
  document.getElementById("btnYouTube")?.addEventListener("click", () => cambiarPlataforma("youtube"));
});
