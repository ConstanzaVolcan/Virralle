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

  const loginInputs = {
    email: document.getElementById("loginEmail"),
    password: document.getElementById("loginPassword"),
    cancelar: btnCancelarLogin,
    iniciar: btnIniciarSesion,
    registro: btnAbrirRegistro
  };

  const registroInputs = {
    nombre: document.getElementById("nombreRegistro"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    cancelar: btnCancelarRegistro,
    crear: document.getElementById("btnCrearCuenta")
  };
  const textos = {
    es: {
      eslogan: "Hazte viral con IA",
      iniciarSesion: "Iniciar sesión",
      pro: "Mejorar a PRO",
      contactanos: "Contáctanos",
      tituloTikTok: "Comencemos la creación de tu TikTok viral",
      descTikTok: "Recibe la mejor idea y consejo para triunfar en TikTok",
      tituloInstagram: "Crea un post viral en Instagram",
      descInstagram: "Haz que tu contenido destaque en Instagram con una idea viral",
      tituloYouTube: "Lleva tu canal al siguiente nivel",
      descYouTube: "Diseña el próximo gran video viral del internet",
      placeholderIdea: "¿Tienes algo en mente o prefieres que te sorprendamos?",
      botonTikTok: "🚀 ¡Crear mi TikTok viral!",
      botonInstagram: "📸 ¡Crear mi post viral!",
      botonYouTube: "🎮 ¡Crear mi video viral!",
      alertaLimite: "🚫 Solo puedes generar 1 caption gratis. Actualiza a PRO por solo $5.99/mes.",
      alertaLimiteDesc: "Suscripción mensual — cancela en cualquier momento.",
      login: {
        titulo: "Iniciar sesión",
        email: "Tu correo",
        password: "Contraseña",
        cancelar: "Cancelar",
        entrar: "Entrar",
        noCuenta: "¿No tienes cuenta?",
        crearCuenta: "Crear cuenta"
      },
      registro: {
        titulo: "Crear cuenta",
        nombre: "Tu nombre",
        email: "Tu correo",
        password: "Contraseña",
        cancelar: "Cancelar",
        crear: "Crear cuenta"
      },
      paises: {
        Chile: "Chile",
        Mexico: "México",
        Argentina: "Argentina",
        USA: "Estados Unidos"
      }
    },
    en: {
      eslogan: "Go viral with AI",
      iniciarSesion: "Log in",
      pro: "Upgrade to PRO",
      contactanos: "Contact Us",
      tituloTikTok: "Let's start creating your viral TikTok",
      descTikTok: "Get the best idea and tip to succeed on TikTok",
      tituloInstagram: "Create a viral post on Instagram",
      descInstagram: "Make your content shine on Instagram with a viral idea",
      tituloYouTube: "Take your channel to the next level",
      descYouTube: "Design the next big viral video of the internet",
      placeholderIdea: "Tell us your idea!",
      botonTikTok: "🚀 Create my viral TikTok!",
      botonInstagram: "📸 Create my viral post!",
      botonYouTube: "🎮 Create my viral video!",
      alertaLimite: "🚫 You can only generate 1 caption for free. Upgrade to PRO for unlimited access at just $5.99/month.",
      alertaLimiteDesc: "Monthly subscription — cancel anytime.",
      login: {
        titulo: "Log in",
        email: "Your email",
        password: "Password",
        cancelar: "Cancel",
        entrar: "Enter",
        noCuenta: "Don't have an account?",
        crearCuenta: "Sign up"
      },
      registro: {
        titulo: "Sign up",
        nombre: "Your name",
        email: "Your email",
        password: "Password",
        cancelar: "Cancel",
        crear: "Create account"
      },
      paises: {
        Chile: "Chile",
        Mexico: "Mexico",
        Argentina: "Argentina",
        USA: "United States"
      }
    }
  };
  function traducirModales(idioma) {
    // Login modal
    document.querySelector("#loginModal h2").textContent = textos[idioma].login.titulo;
    document.getElementById("loginEmail").placeholder = textos[idioma].login.email;
    document.getElementById("loginPassword").placeholder = textos[idioma].login.password;
    document.getElementById("btnCancelarLogin").textContent = textos[idioma].login.cancelar;
    document.getElementById("btnIniciarSesion").textContent = textos[idioma].login.entrar;
    document.getElementById("btnAbrirRegistro").textContent = textos[idioma].login.crearCuenta;
    document.querySelector("#loginModal p").childNodes[0].textContent = textos[idioma].login.noCuenta + " ";

    // Registro modal
    const registroTitulo = document.querySelector("#registroModal h2");
    const nombreInput = document.getElementById("nombreRegistro");
    const emailRegistro = document.getElementById("email");
    const passRegistro = document.getElementById("password");

    if (registroTitulo && nombreInput && emailRegistro && passRegistro) {
      registroTitulo.textContent = textos[idioma].registro.titulo;
      nombreInput.placeholder = textos[idioma].registro.nombre;
      emailRegistro.placeholder = textos[idioma].registro.email;
      passRegistro.placeholder = textos[idioma].registro.password;
      document.getElementById("btnCancelarRegistro").textContent = textos[idioma].registro.cancelar;
      document.getElementById("btnRegistrar").textContent = textos[idioma].registro.crear;
    }

    // Países
    const paises = textos[idioma].paises;
    const opciones = paisSelect.querySelectorAll("option");
    opciones.forEach((opcion) => {
      const valor = opcion.value;
      if (paises[valor]) {
        opcion.textContent = paises[valor];
      }
    });
  }
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
    traducirModales(idioma); // 👈 Traduce también los modales y países
  });

  // Llamada inicial
  traducirModales(selectIdioma?.value || "es");
