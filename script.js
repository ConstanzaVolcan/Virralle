// script.js limpio y final — funciones activas, sin claves, todo unido

// Idioma
const traducciones = {
  es: {
    titulo: "VIRRALLE",
    eslogan: "Hazte viral con IA",
    placeholderTema: "¿Sobre qué es tu publicación?",
    alerta: "Solo puedes generar 1 caption gratis. Actualiza a PRO para acceso ilimitado."
  },
  en: {
    titulo: "AI Caption Generator",
    eslogan: "Go viral with AI",
    placeholderTema: "What's your post about?",
    alerta: "You can only generate 1 caption for free. Upgrade to PRO for unlimited access."
  }
};

document.getElementById("languageSelect").addEventListener("change", function () {
  const idioma = this.value;
  const t = traducciones[idioma];

  document.querySelector("h1").textContent = t.titulo;
  document.querySelector(".eslogan").textContent = t.eslogan;
  document.getElementById("inputPlataforma").placeholder = t.placeholderTema;
  document.querySelector("#alertaLimite p").textContent = t.alerta;
});

// Captions IA (API desconectada por seguridad)
async function generarIdea() {
  const yaUsoGratis = localStorage.getItem("yaUsoGratis");
  if (yaUsoGratis === "true") {
    document.getElementById("alertaLimite").classList.remove("oculto");
    document.getElementById("botonPro").classList.remove("oculto");
    return;
  }
  localStorage.setItem("yaUsoGratis", "true");
  document.getElementById("cargando").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("resultadoReels").classList.remove("hidden");
    document.querySelector("#resultadoReels p").textContent = "Aquí iría una idea viral generada por IA ✨";
    document.getElementById("cargando").classList.add("hidden");
  }, 1800);
}

// Copiar texto
function copiarTexto(id) {
  const texto = document.getElementById(id).textContent;
  navigator.clipboard.writeText(texto).then(() => {
    alert("Texto copiado al portapapeles ✅");
  });
}

// Abrir login / registro
function abrirLogin() {
  document.getElementById("loginModal").classList.remove("hidden");
}
function cerrarLogin() {
  document.getElementById("loginModal").classList.add("hidden");
}
function abrirRegistro() {
  cerrarLogin();
  document.getElementById("registroModal").classList.remove("hidden");
}
function cerrarRegistro() {
  document.getElementById("registroModal").classList.add("hidden");
}
function iniciarSesion() {
  alert("Sesión iniciada (simulada)");
  cerrarLogin();
}
function registrarCuenta() {
  alert("Cuenta creada (simulada)");
  cerrarRegistro();
}

// Modal PRO
function abrirModalPro() {
  document.getElementById("modalPro").classList.remove("hidden");
}
function cerrarModalPro() {
  document.getElementById("modalPro").classList.add("hidden");
}

// Modal contacto
function abrirContacto() {
  document.getElementById("modalContacto").classList.remove("hidden");
}
function cerrarContacto() {
  document.getElementById("modalContacto").classList.add("hidden");
}
function copiarCorreo() {
  const correo = document.getElementById("correoContacto").textContent;
  navigator.clipboard.writeText(correo).then(() => {
    alert("Correo copiado ✅");
  });
}
