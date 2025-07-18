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

  const paisSelect = document.getElementById("pais");
  const consejosBox = document.getElementById("consejosVirales");
  const horaSpan = document.getElementById("mejorHora");
  const hashtagsSpan = document.getElementById("hashtagsRecomendados");
  const consejoSpan = document.getElementById("consejoViral");

  paisSelect.addEventListener("change", async () => {
    const pais = paisSelect.value;
    const plataforma = obtenerPlataforma();

    const resultado = await obtenerConsejosPara(plataforma, pais);

    horaSpan.textContent = resultado.hora;
    hashtagsSpan.textContent = resultado.hashtags.join(" ");
    consejoSpan.textContent = resultado.consejo;

    consejosBox.classList.remove("hidden");
  });

  const textos = {
    es: {
      eslogan: "Hazte viral con IA",
      iniciarSesion: "Iniciar sesión",
      pro: "Mejorar a PRO",
      contactanos: "Contáctanos",
      tituloTikTok: "Comencemos la creación de tu TikTok viral",
      descTikTok: "Recibe la mejor idea y consejo para triunfar en TikTok.",
      tituloInstagram: "Crea un post viral en Instagram",
      descInstagram: "Haz que tu contenido destaque en Instagram con una idea viral.",
      tituloYouTube: "Lleva tu canal al siguiente nivel",
      descYouTube: "Diseña el próximo gran video viral del internet.",
      placeholderIdea: "¡Cuéntanos tu idea!",
      botonTikTok: "🚀 ¡Crear mi TikTok viral!",
      botonInstagram: "📸 ¡Crear mi post viral!",
      botonYouTube: "🎮 ¡Crear mi video viral!",
      alertaLimite: "🚫 Solo puedes generar 1 caption gratis. Actualiza a PRO por solo $5.99/mes.",
      alertaLimiteDesc: "Suscripción mensual — cancela en cualquier momento."
    },
    categorias: [
  { value: "", label: "Selecciona una categoría" },
  { value: "divertido", label: "🌟 Contenido Divertido" },
  { value: "retos", label: "🔥 Retos y Tendencias" },
  { value: "lifehacks", label: "🛠 Life Hacks / Tutoriales" },
  { value: "curiosidades", label: "🤯 Curiosidades y Datos" },
  { value: "asmr", label: "🎷 ASMR y Relajación" },
  { value: "emocional", label: "❤️ Contenido Emocional" },
  { value: "educativo", label: "📚 Educación y Divulgación" },
  { value: "historias", label: "📖 Story Time" },
  { value: "espiritual", label: "🧘 Espiritualidad y Bienestar" },
  { value: "ambiental", label: "🌱 Conciencia Ambiental" },
  { value: "animales", label: "🐾 Animales y Mascotas" },
  { value: "tematico", label: "🎯 Contenido Temático Específico" }
],

    en: {
      eslogan: "Go viral with AI",
      iniciarSesion: "Log in",
      pro: "Upgrade to PRO",
      contactanos: "Contact Us",
      tituloTikTok: "Let's start creating your viral TikTok",
      descTikTok: "Get the best idea and tip to succeed on TikTok.",
      tituloInstagram: "Create a viral post on Instagram",
      descInstagram: "Make your content shine on Instagram with a viral idea.",
      tituloYouTube: "Take your channel to the next level",
      descYouTube: "Design the next big viral video of the internet.",
      placeholderIdea: "Tell us your idea!",
      botonTikTok: "🚀 Create my viral TikTok!",
      botonInstagram: "📸 Create my viral post!",
      botonYouTube: "🎮 Create my viral video!",
      alertaLimite: "🚫 You can only generate 1 caption for free. Upgrade to PRO for unlimited access at just $5.99/month.",
      alertaLimiteDesc: "Monthly subscription — cancel anytime."
    },
    categorias: [
  { value: "", label: "Select a category" },
  { value: "divertido", label: "🌟 Funny Content" },
  { value: "retos", label: "🔥 Challenges & Trends" },
  { value: "lifehacks", label: "🛠 Life Hacks / Tutorials" },
  { value: "curiosidades", label: "🤯 Curiosities & Facts" },
  { value: "asmr", label: "🎷 ASMR & Relaxation" },
  { value: "emocional", label: "❤️ Emotional Content" },
  { value: "educativo", label: "📚 Education & Learning" },
  { value: "historias", label: "📖 Story Time" },
  { value: "espiritual", label: "🧘 Spirituality & Wellness" },
  { value: "ambiental", label: "🌱 Environmental Awareness" },
  { value: "animales", label: "🐾 Animals & Pets" },
  { value: "tematico", label: "🎯 Specific Thematic Content" }
]

  };

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function cambiarPlataforma(plataforma) {
    contenedorPrincipal.className = "bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-lg w-full max-w-xl flex flex-col items-center gap-6";
    contenedorPrincipal.classList.add(`${plataforma}-style`);

    const main = document.querySelector("main");
    main.classList.remove("tiktok", "instagram", "youtube");
    main.classList.add(plataforma);
function capitalize(str) {
  return str === "tiktok" ? "TikTok"
       : str === "youtube" ? "YouTube"
       : str.charAt(0).toUpperCase() + str.slice(1);
}

    const idioma = selectIdioma.value;
    tituloPlataforma.textContent = textos[idioma][`titulo${capitalize(plataforma)}`];
    descripcionPlataforma.textContent = textos[idioma][`desc${capitalize(plataforma)}`];
    inputPlataforma.placeholder = textos[idioma].placeholderIdea;
    botonPlataforma.textContent = textos[idioma][`boton${capitalize(plataforma)}`];

    if (paisSelect.value) {
      paisSelect.dispatchEvent(new Event("change"));
    }
  }

  function abrirModal(modal) {
    if (modal) modal.classList.remove("hidden");
  }

  function cerrarModal(modal) {
    if (modal) modal.classList.add("hidden");
  }

  btnTikTok?.addEventListener("click", (e) => { e.preventDefault(); cambiarPlataforma("tiktok"); });
  btnInstagram?.addEventListener("click", (e) => { e.preventDefault(); cambiarPlataforma("instagram"); });
  btnYouTube?.addEventListener("click", (e) => { e.preventDefault(); cambiarPlataforma("youtube"); });

  btnLogin?.addEventListener("click", (e) => { e.preventDefault(); abrirModal(loginModal); });
  btnPro?.addEventListener("click", (e) => { e.preventDefault(); abrirModalPro(); });
  btnContacto?.addEventListener("click", (e) => { e.preventDefault(); abrirModal(modalContacto); });

  btnCancelarLogin?.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(loginModal); });
  btnIniciarSesion?.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(loginModal); });
  btnAbrirRegistro?.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(loginModal); abrirModal(registroModal); });
  btnCancelarRegistro?.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(registroModal); });
  btnRegistrar?.addEventListener("click", (e) => { e.preventDefault(); cerrarModal(registroModal); });

  // ... tu script previo (sin modificar estructura) ...

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
  actualizarOpcionesCategorias();

  // ✅ Traducción dinámica de etiqueta "Tu país"
  const labelPais = document.querySelector('label[for="pais"]');
  if (labelPais) labelPais.textContent = idioma === "en" ? "🌍 Your country" : "🌍 Tu país";

  // ✅ Traducción dinámica de títulos de consejos
  const consejos = document.querySelectorAll("#consejosVirales span");
  if (consejos.length >= 6) {
    consejos[0].textContent = idioma === "en" ? "🕒 Best time to post:" : "🕒 Mejor hora de publicación:";
    consejos[2].textContent = idioma === "en" ? "🔥 Recommended hashtags:" : "🔥 Hashtags recomendados:";
    consejos[4].textContent = idioma === "en" ? "💡 Viral tip:" : "💡 Consejo viral:";
  }

  // ✅ Traducción dinámica de países según idioma del país
  const paisSelect = document.getElementById("pais");
  const paisOptions = paisSelect?.options;
  if (!paisOptions) return;

  const traduccionesPaises = {
    "Alemania": { es: "Alemania", en: "Germany", de: "Deutschland" },
    "Argentina": { es: "Argentina", en: "Argentina", es_ar: "Argentina" },
    "Brasil": { es: "Brasil", en: "Brazil", pt: "Brasil" },
    "Canadá": { es: "Canadá", en: "Canada", fr: "Canada" },
    "Chile": { es: "Chile", en: "Chile" },
    "Colombia": { es: "Colombia", en: "Colombia" },
    "España": { es: "España", en: "Spain", ca: "Espanya" },
    "Estados Unidos": { es: "Estados Unidos", en: "United States" },
    "Francia": { es: "Francia", en: "France", fr: "France" },
    "Italia": { es: "Italia", en: "Italy", it: "Italia" },
    "México": { es: "México", en: "Mexico" },
    "Perú": { es: "Perú", en: "Peru" },
    "Reino Unido": { es: "Reino Unido", en: "United Kingdom" },
    "Uruguay": { es: "Uruguay", en: "Uruguay" },
    "Venezuela": { es: "Venezuela", en: "Venezuela" },
    "Otro país": { es: "🌍 Otro país", en: "🌍 Other country" }
  };

  for (let i = 0; i < paisOptions.length; i++) {
    const opcion = paisOptions[i];
    const nombreActual = opcion.value;
    if (traduccionesPaises[nombreActual]) {
      opcion.textContent = traduccionesPaises[nombreActual][idioma] || nombreActual;
    }
  }
});
