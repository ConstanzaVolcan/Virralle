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
  const btnCancelarLogin = document.getElementById("btnCancelarLogin");
  const btnIniciarSesion = document.getElementById("btnIniciarSesion");
  const btnAbrirRegistro = document.getElementById("btnAbrirRegistro");
  const btnCancelarRegistro = document.getElementById("btnCancelarRegistro");
  const btnRegistrar = document.getElementById("btnRegistrar");

  const modalPro = document.getElementById("modalPro");
  const modalContacto = document.getElementById("modalContacto");
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
      alertaLimite: "🚫 Solo puedes generar 1 caption gratis. Actualiza a PRO para acceso ilimitado por solo $5.99/mes.",
      alertaLimiteDesc: "Suscripción mensual — cancela en cualquier momento."
    },
    en: {
      eslogan: "Go viral with AI",
      iniciarSesion: "Log in",
      pro: "Upgrade to PRO",
      contactanos: "Contact Us",
      tituloTikTok: "Let's start creating your viral TikTok",
      descTikTok: "Answer a few questions and get a ready-to-go idea to triumph on TikTok.",
      tituloInstagram: "Let's start creating your viral Instagram Reel",
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
    modal.classList.remove("hidden");
  }

  function cerrarModal(modal) {
    modal.classList.add("hidden");
  }
  // Eventos de botones de plataforma
  if (btnTikTok) btnTikTok.addEventListener("click", (e) => { e.preventDefault(); cambiarPlataforma("tiktok"); });
  if (btnInstagram) btnInstagram.addEventListener("click", (e) => { e.preventDefault(); cambiarPlataforma("instagram"); });
  if (btnYouTube) btnYouTube.addEventListener("click", (e) => { e.preventDefault(); cambiarPlataforma("youtube"); });

  // Login
  if (btnLogin) btnLogin.addEventListener("click", (e) => { e.preventDefault(); abrirModal(loginModal); });
  if (btnCancelarLogin) btnCancelarLogin.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(loginModal); });
  if (btnIniciarSesion) btnIniciarSesion.addEventListener("click", (e) => { e.preventDefault(); alert("Inicio de sesión simulado"); cerrarModal(loginModal); });
  if (btnAbrirRegistro) btnAbrirRegistro.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(loginModal); abrirModal(registroModal); });

  // Registro
  if (btnCancelarRegistro) btnCancelarRegistro.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(registroModal); });
  if (btnRegistrar) btnRegistrar.addEventListener("click", (e) => { e.preventDefault(); alert("Registro simulado - Cuenta creada"); cerrarModal(registroModal); });

  // PRO con PayPal
  if (btnPro) btnPro.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal(modalPro);
    if (!document.getElementById("paypal-button-container").hasChildNodes()) {
      paypal.Buttons({
        style: { shape: 'rect', color: 'purple', layout: 'vertical', label: 'subscribe' },
        createSubscription: function (data, actions) {
          return actions.subscription.create({ plan_id: 'TU_PLAN_ID' });
        },
        onApprove: function (data, actions) {
          alert('¡Suscripción activada correctamente!');
        }
      }).render('#paypal-button-container');
    }
  });

  // Contacto
  if (btnContacto) btnContacto.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal(modalContacto);
  });

  // Cambio de idioma
  if (selectIdioma) selectIdioma.addEventListener("change", (e) => {
    const idioma = e.target.value;
    document.getElementById("eslogan").innerText = textos[idioma].eslogan;
    btnLogin.innerText = textos[idioma].iniciarSesion;
    btnPro.innerText = textos[idioma].pro;
    btnContacto.innerText = textos[idioma].contactanos;
    const plataforma = contenedorPrincipal.classList.contains("instagram-style") ? "instagram"
                      : contenedorPrincipal.classList.contains("youtube-style") ? "youtube"
                      : "tiktok";
    cambiarPlataforma(plataforma);
    document.getElementById("alertaLimite").querySelector("p").innerText = textos[idioma].alertaLimite;
    document.getElementById("alertaLimite").querySelector(".text-sm").innerText = textos[idioma].alertaLimiteDesc;
  });

  // Inicializar con TikTok al cargar
  
