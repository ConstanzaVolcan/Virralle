document.addEventListener("DOMContentLoaded", () => {
  const contenedorPrincipal = document.getElementById("contenedorPrincipal");
  const tituloPlataforma = document.getElementById("tituloPlataforma");
  const descripcionPlataforma = document.getElementById("descripcionPlataforma");
  const inputPlataforma = document.getElementById("inputPlataforma");
  const botonPlataforma = document.getElementById("botonPlataforma");
  const selectIdioma = document.getElementById("languageSelect");

  const btnTikTok = document.getElementById("btnTikTok");
  const btnInstagram = document.getElementById("btnInstagram");
  const btnYouTube = document.getElementById("btnYouTube");
  const btnLogin = document.getElementById("btnLogin");
  const btnPro = document.getElementById("btnPro");
  const btnContacto = document.getElementById("btnContacto");

  const loginModal = document.getElementById("loginModal");
  const registroModal = document.getElementById("registroModal");
  const modalPro = document.getElementById("modalPro");
  const modalContacto = document.getElementById("modalContacto");

  const btnCancelarLogin = document.getElementById("btnCancelarLogin");
  const btnIniciarSesion = document.getElementById("btnIniciarSesion");
  const btnAbrirRegistro = document.getElementById("btnAbrirRegistro");
  const btnCancelarRegistro = document.getElementById("btnCancelarRegistro");
  const btnRegistrar = document.getElementById("btnRegistrar");

  const textos = {
    es: {
      eslogan: "Hazte viral con IA",
      iniciarSesion: "Iniciar sesión",
      pro: "Mejorar a PRO",
      contactanos: "Contáctanos",
      tituloTikTok: "Comencemos la creación de tu TikTok viral",
      descTikTok: "Responde unas preguntas y recibe una idea lista para triunfar en TikTok.",
      tituloInstagram: "Crea un post viral en Instagram",
      descInstagram: "Haz que tu contenido destaque en Instagram con una idea viral.",
      tituloYouTube: "Hazte viral en YouTube con esta idea",
      descYouTube: "Planifica tu video viral con ayuda de IA.",
      placeholderIdea: "¡Cuéntanos tu idea!",
      botonTikTok: "🚀 ¡Crear mi TikTok viral!",
      botonInstagram: "📸 ¡Crear mi post viral!",
      botonYouTube: "🎮 ¡Crear mi YouTube viral!",
      alertaLimite: "🚫 Solo puedes generar 1 caption gratis. Actualiza a PRO por solo $5.99/mes.",
      alertaLimiteDesc: "Suscripción mensual — cancela en cualquier momento."
    },
    en: {
      eslogan: "Go viral with AI",
      iniciarSesion: "Log in",
      pro: "Upgrade to PRO",
      contactanos: "Contact Us",
      tituloTikTok: "Let's start creating your viral TikTok",
      descTikTok: "Answer a few questions and get a ready-to-go idea to triumph on TikTok.",
      tituloInstagram: "Create a viral post on Instagram",
      descInstagram: "Make your content shine on Instagram with a viral idea.",
      tituloYouTube: "Go viral on YouTube with this idea",
      descYouTube: "Plan your viral video with AI support.",
      placeholderIdea: "Tell us your idea!",
      botonTikTok: "🚀 Create my viral TikTok!",
      botonInstagram: "📸 Create my viral post!",
      botonYouTube: "🎮 Create my viral YouTube video!",
      alertaLimite: "🚫 You can only generate 1 caption for free. Upgrade to PRO for unlimited access at just $5.99/month.",
      alertaLimiteDesc: "Monthly subscription — cancel anytime."
    }
  };

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function cambiarPlataforma(plataforma) {
    contenedorPrincipal.className = "bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-lg w-full max-w-xl flex flex-col items-center gap-6";
    contenedorPrincipal.classList.add(`${plataforma}-style`);
    const idioma = selectIdioma.value;
    tituloPlataforma.textContent = textos[idioma][`titulo${capitalize(plataforma)}`];
    descripcionPlataforma.textContent = textos[idioma][`desc${capitalize(plataforma)}`];
    inputPlataforma.placeholder = textos[idioma].placeholderIdea;
    botonPlataforma.textContent = textos[idioma][`boton${capitalize(plataforma)}`];
  }

  function abrirModal(modal) {
    if (modal) modal.classList.remove("hidden");
  }

  function cerrarModal(modal) {
    if (modal) modal.classList.add("hidden");
  }

  // Eventos de plataforma
  btnTikTok?.addEventListener("click", (e) => { e.preventDefault(); cambiarPlataforma("tiktok"); });
  btnInstagram?.addEventListener("click", (e) => { e.preventDefault(); cambiarPlataforma("instagram"); });
  btnYouTube?.addEventListener("click", (e) => { e.preventDefault(); cambiarPlataforma("youtube"); });

  // Eventos de modales
  btnLogin?.addEventListener("click", (e) => { e.preventDefault(); abrirModal(loginModal); });
  btnPro?.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModalPro();
  });
  btnContacto?.addEventListener("click", (e) => { e.preventDefault(); abrirModal(modalContacto); });

  // Eventos login y registro
  btnCancelarLogin?.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(loginModal); });
  btnIniciarSesion?.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(loginModal); });
  btnAbrirRegistro?.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(loginModal); abrirModal(registroModal); });
  btnCancelarRegistro?.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(registroModal); });
  btnRegistrar?.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(registroModal); });

  // Cambio de idioma
  selectIdioma?.addEventListener("change", (e) => {
    const idioma = e.target.value;
    document.getElementById("eslogan").textContent = textos[idioma].eslogan;
    btnLogin.textContent = textos[idioma].iniciarSesion;
    btnPro.textContent = textos[idioma].pro;
    btnContacto.textContent = textos[idioma].contactanos;

    const plataforma = contenedorPrincipal.classList.contains("instagram-style") ? "instagram"
                    : contenedorPrincipal.classList.contains("youtube-style") ? "youtube"
                    : "tiktok";
    cambiarPlataforma(plataforma);

    const alerta = document.getElementById("alertaLimite");
    if (alerta) {
      alerta.querySelector("p").textContent = textos[idioma].alertaLimite;
      alerta.querySelector(".text-sm").textContent = textos[idioma].alertaLimiteDesc;
    }
  });

  cambiarPlataforma("tiktok");
});

// ✅ Confirmación de carga
console.log("✅ script.js cargado");

// ✅ Función para abrir el modal PRO con PayPal
function abrirModalPro() {
  const modal = document.getElementById("modalPro");
  modal.classList.remove("hidden");
function abrirModalPro() {
  const modal = document.getElementById("modalPro");
  modal.classList.remove("hidden");

  const paypalContainer = document.getElementById("paypal-button-container");

  if (paypalContainer.childElementCount === 0) {
    paypal.Buttons({
      createSubscription: function (data, actions) {
        return actions.subscription.create({
          plan_id: "P-34X70623V9188512DNBZS2UA"
        });
      },
      onApprove: function (data, actions) {
        alert("✅ ¡Suscripción PRO activada con éxito!");
        document.getElementById("modalPro").classList.add("hidden");
      }
    }).render("#paypal-button-container");
  }
}
document.getElementById("btnPro").addEventListener("click", function (e) {
  e.preventDefault();
  abrirModalPro();
});
// Asegúrate de que el DOM esté listo
window.addEventListener('DOMContentLoaded', () => {
  // Conecta el botón de “Mejorar a PRO” con la función
  document.getElementById("btnPro").addEventListener("click", function (e) {
    e.preventDefault(); // Evita que recargue la página
    abrirModalPro();
  });
});

// Función para abrir el modal y cargar PayPal si no está cargado aún
function abrirModalPro() {
  const modal = document.getElementById("modalPro");
  modal.classList.remove("hidden");

  const paypalContainer = document.getElementById("paypal-button-container");

  if (paypalContainer.childElementCount === 0) {
    paypal.Buttons({
      createSubscription: function (data, actions) {
        return actions.subscription.create({
          plan_id: "P-34X70623V9188512DNBZS2UA" // <-- Tu plan real
        });
      },
      onApprove: function (data, actions) {
        alert("✅ ¡Suscripción PRO activada con éxito!");
        document.getElementById("modalPro").classList.add("hidden");
        // Aquí puedes añadir llamada a tu backend si lo deseas
      }
    }).render("#paypal-button-container");
  }
}

