// ... script actualizado ...

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
      alertaLimiteDesc: "Suscripción mensual — cancela en cualquier momento.",
      login: {
        titulo: "Iniciar sesión",
        correo: "Correo electrónico",
        contrasena: "Contraseña",
        cancelar: "Cancelar",
        entrar: "Entrar",
        crearCuenta: "¿No tienes cuenta?",
        crearCuentaLink: "Crear cuenta"
      }
    },
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
      alertaLimiteDesc: "Monthly subscription — cancel anytime.",
      login: {
        titulo: "Log in",
        correo: "Email",
        contrasena: "Password",
        cancelar: "Cancel",
        entrar: "Enter",
        crearCuenta: "Don't have an account?",
        crearCuentaLink: "Sign up"
      }
    }
  };

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

    // Traducción modal login
    document.getElementById("tituloLogin").textContent = textos[idioma].login.titulo;
    document.getElementById("inputCorreo").placeholder = textos[idioma].login.correo;
    document.getElementById("inputPassword").placeholder = textos[idioma].login.contrasena;
    document.getElementById("btnCancelarLogin").textContent = textos[idioma].login.cancelar;
    document.getElementById("btnIniciarSesion").textContent = textos[idioma].login.entrar;
    document.getElementById("textoCrearCuenta").childNodes[0].textContent = textos[idioma].login.crearCuenta + " ";
    document.getElementById("linkCrearCuenta").textContent = textos[idioma].login.crearCuentaLink;
  });

  cambiarPlataforma("tiktok");
});

// ✅ Confirmación de carga
console.log("✅ script.js cargado");
