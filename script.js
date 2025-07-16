/* 
Correcciones en el HTML necesarias:
- Asegúrate de que el elemento selector de idioma tenga id="idioma" (si en el HTML tenía otro id, cámbialo para que coincida con este script).
- Verifica que los botones tengan los IDs esperados: "btnLogin", "btnPro", "btnContacto". Si en el HTML se usaron otros (p.ej. "btnIniciarSesion", "btnContact"), renómbralos para coincidir.
- Verifica que los modales tengan los IDs esperados: "loginModal", "proModal", "contactoModal" y "registroModal". Por ejemplo, si el modal de contacto en el HTML tenía id="contactModal" (en inglés), cámbialo a "contactoModal" para coincidir con el script.
- Cada modal debe incluir un elemento de cierre (botón o span "X") con IDs "loginClose", "proClose", "contactoClose", "registroClose" según corresponda, para que el script pueda cerrarlos. Si faltan en el HTML, agrégalos.
- Asegúrate de que el contenedor principal (donde se aplican las clases *-style para TikTok/Instagram/YouTube) tenga id="contenedorPrincipal" como referencia en el script.
*/

document.addEventListener("DOMContentLoaded", () => {
    // Textos en ambos idiomas
    const textos = {
        es: {
            eslogan: "Hazte viral con IA",
            iniciarSesion: "Iniciar sesión",
            pro: "Mejorar a PRO",
            contactanos: "Contáctanos",
            alertaLimite: "Has alcanzado el límite gratuito.",
            alertaLimiteDesc: "Mejora a PRO para eliminar las limitaciones."
        },
        en: {
            eslogan: "Go viral with AI",
            iniciarSesion: "Sign in",
            pro: "Upgrade to PRO",
            contactanos: "Contact us",
            alertaLimite: "You have reached the free limit.",
            alertaLimiteDesc: "Upgrade to PRO to remove limitations."
        }
    };

    // Referencias a elementos del DOM
    const selectIdioma = document.getElementById("idioma");
    const contenedorPrincipal = document.getElementById("contenedorPrincipal");

    const btnLogin = document.getElementById("btnLogin");
    const btnPro = document.getElementById("btnPro");
    const btnContacto = document.getElementById("btnContacto");
    const btnRegistro = document.getElementById("btnRegistro");

    const loginModal = document.getElementById("loginModal");
    const registroModal = document.getElementById("registroModal");
    const proModal = document.getElementById("proModal");
    const contactoModal = document.getElementById("contactoModal");

    const loginClose = document.getElementById("loginClose");
    const registroClose = document.getElementById("registroClose");
    const proClose = document.getElementById("proClose");
    const contactoClose = document.getElementById("contactoClose");

    // Funciones para abrir y cerrar modales
    const abrirModal = (modal) => {
        if (modal) modal.classList.remove("hidden");
    };
    const cerrarModal = (modal) => {
        if (modal) modal.classList.add("hidden");
    };

    // Función para cambiar plataforma (TikTok/Instagram/YouTube)
    function cambiarPlataforma(plataforma) {
        if (contenedorPrincipal) {
            contenedorPrincipal.classList.remove("tiktok-style", "instagram-style", "youtube-style");
        }
        switch (plataforma) {
            case "instagram":
                if (contenedorPrincipal) contenedorPrincipal.classList.add("instagram-style");
                break;
            case "youtube":
                if (contenedorPrincipal) contenedorPrincipal.classList.add("youtube-style");
                break;
            default:
                if (contenedorPrincipal) contenedorPrincipal.classList.add("tiktok-style");
        }
        // (Si se requiere más lógica al cambiar plataforma, agregarla aquí)
    }

    // Eventos para abrir modales al hacer clic en botones
    if (btnLogin) {
        btnLogin.addEventListener("click", () => abrirModal(loginModal));
    }
    if (btnPro) {
        btnPro.addEventListener("click", () => {
            if (proModal) {
                abrirModal(proModal);
            } else {
                alert("¡Función PRO activada! Muy pronto estará disponible.");
            }
        });
    }
    if (btnContacto) {
        btnContacto.addEventListener("click", () => abrirModal(contactoModal));
    }

    // Evento simulado de registro (crear cuenta) para cerrar el modal de registro
    if (btnRegistro) {
        btnRegistro.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Registro simulado - Cuenta creada");
            cerrarModal(registroModal);
        });
    }

    // Eventos para cerrar modales (botón de cierre y clic fuera del modal)
    if (loginClose) {
        loginClose.addEventListener("click", () => cerrarModal(loginModal));
    }
    if (registroClose) {
        registroClose.addEventListener("click", () => cerrarModal(registroModal));
    }
    if (proClose) {
        proClose.addEventListener("click", () => cerrarModal(proModal));
    }
    if (contactoClose) {
        contactoClose.addEventListener("click", () => cerrarModal(contactoModal));
    }
    window.addEventListener("click", (e) => {
        if (e.target === loginModal) cerrarModal(loginModal);
        if (e.target === registroModal) cerrarModal(registroModal);
        if (e.target === proModal) cerrarModal(proModal);
        if (e.target === contactoModal) cerrarModal(contactoModal);
    });

    // Evento para cambio de idioma
    if (selectIdioma) {
        selectIdioma.addEventListener("change", (e) => {
            const idioma = e.target.value;
            // Actualizar textos al cambiar de idioma
            const esloganElem = document.getElementById("eslogan");
            if (esloganElem) esloganElem.innerText = textos[idioma].eslogan;
            if (btnLogin) btnLogin.innerText = textos[idioma].iniciarSesion;
            if (btnPro) btnPro.innerText = textos[idioma].pro;
            if (btnContacto) btnContacto.innerText = textos[idioma].contactanos;
            const alertaLimiteElem = document.getElementById("alertaLimite");
            if (alertaLimiteElem) {
                const p = alertaLimiteElem.querySelector("p");
                const desc = alertaLimiteElem.querySelector(".text-sm");
                if (p) p.innerText = textos[idioma].alertaLimite;
                if (desc) desc.innerText = textos[idioma].alertaLimiteDesc;
            }
            // Mantener la plataforma actual seleccionada
            let plataformaActual = "tiktok";
            if (contenedorPrincipal) {
                if (contenedorPrincipal.classList.contains("instagram-style")) plataformaActual = "instagram";
                else if (contenedorPrincipal.classList.contains("youtube-style")) plataformaActual = "youtube";
            }
            cambiarPlataforma(plataformaActual);
        });
    }

    // Inicializar la página con la plataforma TikTok por defecto
    cambiarPlataforma("tiktok");
});
