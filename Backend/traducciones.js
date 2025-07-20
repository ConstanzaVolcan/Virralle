// archivo: traducciones.js

document.addEventListener("DOMContentLoaded", () => {
  const selectIdioma = document.getElementById("languageSelect");
  const paisSelect = document.getElementById("pais");
  const consejosBox = document.getElementById("consejosVirales");
  const horaSpan = document.getElementById("mejorHora");
  const hashtagsSpan = document.getElementById("hashtagsRecomendados");
  const consejoSpan = document.getElementById("consejoViral");

  const btnCancelarLogin = document.getElementById("btnCancelarLogin");
  const btnIniciarSesion = document.getElementById("btnIniciarSesion");
  const btnAbrirRegistro = document.getElementById("btnAbrirRegistro");
  const btnCancelarRegistro = document.getElementById("btnCancelarRegistro");
  const btnRegistrar = document.getElementById("btnRegistrar");
  const btnCrearCuenta = document.getElementById("btnCrearCuenta");

  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const nombreRegistro = document.getElementById("nombreRegistro");
  const emailRegistro = document.getElementById("email");
  const passwordRegistro = document.getElementById("password");
  const alerta = document.getElementById("alertaLimite");

  const textosExtra = {
    es: {
      loginPlaceholderEmail: "Tu correo",
      loginPlaceholderPass: "Contraseña",
      registroPlaceholderNombre: "Tu nombre",
      registroPlaceholderEmail: "Tu correo",
      registroPlaceholderPass: "Contraseña",
      cancelar: "Cancelar",
      entrar: "Entrar",
      crearCuenta: "Crear cuenta",
      yaTienesCuenta: "¿Ya tienes cuenta?",
      iniciarSesion: "Iniciar sesión",
      cerrar: "Cerrar",
      enviar: "Enviar"
    },
    en: {
      loginPlaceholderEmail: "Your email",
      loginPlaceholderPass: "Password",
      registroPlaceholderNombre: "Your name",
      registroPlaceholderEmail: "Your email",
      registroPlaceholderPass: "Password",
      cancelar: "Cancel",
      entrar: "Login",
      crearCuenta: "Sign up",
      yaTienesCuenta: "Already have an account?",
      iniciarSesion: "Log in",
      cerrar: "Close",
      enviar: "Send"
    }
  };

  function traducirModales(idioma) {
    if (loginEmail) loginEmail.placeholder = textosExtra[idioma].loginPlaceholderEmail;
    if (loginPassword) loginPassword.placeholder = textosExtra[idioma].loginPlaceholderPass;
    if (btnCancelarLogin) btnCancelarLogin.textContent = textosExtra[idioma].cancelar;
    if (btnIniciarSesion) btnIniciarSesion.textContent = textosExtra[idioma].entrar;
    if (btnAbrirRegistro) btnAbrirRegistro.textContent = textosExtra[idioma].crearCuenta;

    if (nombreRegistro) nombreRegistro.placeholder = textosExtra[idioma].registroPlaceholderNombre;
    if (emailRegistro) emailRegistro.placeholder = textosExtra[idioma].registroPlaceholderEmail;
    if (passwordRegistro) passwordRegistro.placeholder = textosExtra[idioma].registroPlaceholderPass;
    if (btnCancelarRegistro) btnCancelarRegistro.textContent = textosExtra[idioma].cancelar;
    if (btnRegistrar) btnRegistrar.textContent = textosExtra[idioma].crearCuenta;
    if (btnCrearCuenta) btnCrearCuenta.textContent = textosExtra[idioma].crearCuenta;

    if (alerta) {
      alerta.querySelector("p").textContent = textos[idioma].alertaLimite;
      alerta.querySelector(".text-sm").textContent = textos[idioma].alertaLimiteDesc;
    }

    if (paisSelect) {
      const categorias = textos[idioma].categorias;
      const select = document.getElementById("tonoTikTok");
      if (select) {
        select.innerHTML = "";
        categorias.forEach(cat => {
          const option = document.createElement("option");
          option.value = cat.value;
          option.textContent = cat.label;
          select.appendChild(option);
        });
      }
    }
  }

  selectIdioma?.addEventListener("change", (e) => {
    const idioma = e.target.value;
    traducirModales(idioma);
  });

  // Traducción inicial al cargar la página
  traducirModales(selectIdioma?.value || "es");
});
