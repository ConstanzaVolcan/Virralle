document.addEventListener("DOMContentLoaded", () => {
  const loginModal = document.getElementById("loginModal");
  const modalPro = document.getElementById("modalPro");
  const modalContacto = document.getElementById("modalContacto");

  const btnLogin = document.getElementById("btnLogin");
  const btnPro = document.getElementById("btnPro");
  const btnContacto = document.getElementById("btnContacto");
  const btnCancelarLogin = document.getElementById("btnCancelarLogin");

  const selectIdioma = document.getElementById("languageSelect");
  const eslogan = document.getElementById("eslogan");
  const titulo = document.getElementById("tituloPlataforma");
  const descripcion = document.getElementById("descripcionPlataforma");
  const boton = document.getElementById("botonPlataforma");

  const textos = {
    es: {
      eslogan: "Hazte viral con IA",
      titulo: "Comencemos la creación de tu TikTok viral",
      descripcion: "Responde unas preguntas y recibe una idea lista para triunfar en TikTok.",
      boton: "🚀 ¡Crear mi TikTok viral!",
    },
    en: {
      eslogan: "Go viral with AI",
      titulo: "Let’s create your viral TikTok",
      descripcion: "Answer a few questions and get a viral idea for TikTok.",
      boton: "🚀 Create my viral TikTok!",
    }
  };

  function cambiarIdioma(idioma) {
    eslogan.textContent = textos[idioma].eslogan;
    titulo.textContent = textos[idioma].titulo;
    descripcion.textContent = textos[idioma].descripcion;
    boton.textContent = textos[idioma].boton;
  }

  // Eventos
  btnLogin.addEventListener("click", e => {
    e.preventDefault();
    loginModal.classList.remove("hidden");
  });

  btnPro.addEventListener("click", e => {
    e.preventDefault();
    modalPro.classList.remove("hidden");
  });

  btnContacto.addEventListener("click", e => {
    e.preventDefault();
    modalContacto.classList.remove("hidden");
  });

  btnCancelarLogin?.addEventListener("click", e => {
    e.preventDefault();
    loginModal.classList.add("hidden");
  });

  selectIdioma.addEventListener("change", e => {
    cambiarIdioma(e.target.value);
  });

  cambiarIdioma("es");
});
