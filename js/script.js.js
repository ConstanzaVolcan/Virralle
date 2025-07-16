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

  // ... (funciones cambiarPlataforma, abrirModal, eventos, etc.)
  // Ya sabes que estas funciones están igual que antes

  // ✅ Confirmación de carga
  console.log("✅ script.js cargado");

  // ✅ Función para abrir el modal PRO con PayPal (sin color personalizado)
  window.abrirModalPro = function () {
    const modal = document.getElementById("modalPro");
    modal.classList.remove("hidden");

    const paypalContainer = document.getElementById("paypal-button-container");

    if (paypalContainer.childElementCount === 0) {
      paypal.Buttons({
        style: {
          shape: 'rect',
          layout: 'vertical',
          label: 'subscribe'
        },
        createSubscription: function (data, actions) {
          return actions.subscription.create({
            plan_id: "P-34X70623V9188512DNBZS2UA"
          });
        },
        onApprove: function (data, actions) {
          alert("✅ ¡Suscripción PRO activada con éxito!");
          modal.classList.add("hidden");
        }
      }).render("#paypal-button-container");
    }
  };
});
