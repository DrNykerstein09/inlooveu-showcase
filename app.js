(() => {
  "use strict";
  const spanish = {
    skip: "Ir al contenido",
    homeLabel: "Inicio de Inlooveu",
    navigation: "Navegación principal",
    navProduct: "El producto",
    navEngineering: "Ingeniería",
    heroEyebrow: "Una plataforma social universitaria · Producto e ingeniería",
    heroTitleFirst: "Creada para conectar",
    heroTitleSecond: "a una comunidad real.",
    heroDescription: "Diseñé, desarrollé y lancé Inlooveu: un espacio para que estudiantes universitarios descubran personas, expresen sus intereses y conviertan una primera conexión en una conversación.",
    heroRole: "Fundador y desarrollador full-stack",
    watch: "Ver el recorrido",
    engineeringNotes: "Notas de ingeniería",
    metricLabel: "cuentas registradas",
    metricDefinition: "Conteo histórico de MongoDB registrado por el fundador. Mide registros, no usuarios activos.",
    evidenceLink: "Sobre esta cifra ↓",
    heroBaseline: "De una idea a un producto en funcionamiento y desplegado.",
    filmEyebrow: "01 / Un producto en movimiento",
    filmDuration: "Recorrido de 120 segundos",
    filmTitle: "Una conexión es solo el principio.",
    videoLabel: "Recorrido del producto Inlooveu",
    videoFallback: "Tu navegador no admite video integrado.",
    chaptersLabel: "Capítulos del video",
    chapterRegistration: "Registro",
    chapterProfile: "Perfil",
    chapterCards: "Tarjetas y swipe",
    chapterChat: "Chat en vivo",
    chapterHistory: "Historial",
    filmNote: "Narración en español; subtítulos en español e inglés. Las tarjetas y vistas de perfil muestran datos públicos y fotos originales en una copia local. El registro usa datos de ejemplo; el chat es un intercambio local controlado.",
    productEyebrow: "02 / La experiencia",
    productTitleFirst: "De un perfil",
    productTitleSecond: "a una conversación.",
    productIntro: "Un recorrido desde los formularios de registro hasta los perfiles, el descubrimiento y los mensajes. La muestra del formulario termina antes del envío final.",
    registrationTitle: "Recorrer los formularios de registro.",
    registrationBody: "El correo y la contraseña inician el recorrido. Nombre, fecha de nacimiento, facultad, carrera, semestre y preferencias dan paso a una biografía y los intereses. Esta muestra termina antes del envío final.",
    registrationDetail: "Formularios de registro · Datos académicos · Preferencias e intereses",
    registrationAlt: "Formularios de registro con datos de ejemplo preparados, antes del envío final",
    registrationCaption: "Datos de ejemplo en el formulario real, antes del envío final.",
    profileTitle: "Que un perfil se sienta como una persona.",
    profileBody: "El registro con correo confirmado, varias fotos, una biografía y un catálogo de intereses permiten presentarse. El recorte de fotos ocurre en el navegador.",
    profileDetail: "Ciclo de cuentas · Perfiles · Preparación de imágenes con Canvas",
    profileAlt: "Fotos, biografía e intereses originales de un perfil de Inlooveu en una copia local",
    profileCaption: "Fotos y datos públicos originales del perfil, mostrados en una copia local aislada.",
    discoveryTitle: "Darle un siguiente paso a la primera conexión.",
    discoveryBody: "El descubrimiento utiliza la preferencia de género y los perfiles confirmados. Las tarjetas admiten mouse y pantalla táctil; los likes y la reciprocidad acercan a las personas a una conversación.",
    discoveryDetail: "Descubrimiento por preferencia · Likes · Detección de reciprocidad",
    discoveryAlt: "Descubrimiento con datos públicos originales y fotos reales de perfiles en una copia local",
    discoveryCaption: "Fotos reales de perfiles en la interfaz original de descubrimiento, mostradas localmente.",
    cardDetailTitle: "Ver más allá de la primera foto.",
    cardDetailBody: "El control inferior de detalles permite leer la biografía, la carrera, el semestre y los intereses sin salir de la tarjeta. Las fotos cambian dentro de la misma tarjeta.",
    cardDetailDetail: "Galería de fotos · Biografía desplegable · Intereses",
    cardDetailAlt: "Tarjeta desplegada con biografía, datos académicos e intereses públicos originales",
    cardDetailCaption: "La biografía y los intereses públicos originales, desplegados dentro de la tarjeta.",
    conversationTitle: "Conservar la conversación al volver.",
    conversationBody: "Los mensajes se guardan en MongoDB antes de que el cliente emita el registro guardado mediante Socket.IO. Al volver a una conversación, la API recupera su historial.",
    conversationDetail: "Mensajes persistentes · Eventos en tiempo real · Historial recuperado",
    conversationAlt: "Conversación local entre dos cuentas controladas para la demostración",
    conversationCaption: "Mensajes preparados localmente entre dos cuentas controladas para la demostración.",
    engineeringEyebrow: "03 / Notas de ingeniería",
    engineeringTitle: "Guardar. Emitir. Recuperar.",
    engineeringIntro: "La decisión central: un evento en vivo distribuye un mensaje; la base de datos conserva la conversación. Esas responsabilidades se mantienen distintas.",
    architectureAlt: "React envía un mensaje a Express, que lo guarda en MongoDB. El mensaje guardado se emite mediante Socket.IO. Una petición posterior a la API recupera el historial de conversación.",
    architectureClient: "CLIENTE",
    architectureDatabase: "BASE DE DATOS",
    eventExplanation: "distribuye el mensaje guardado",
    historyExplanation: "La API recupera el historial al volver",
    decisionOneTitle: "Persistencia antes de notificar",
    decisionOneBody: "El cliente espera que el POST del mensaje tenga éxito antes de emitir su resultado. Otra petición recupera la conversación guardada. La confirmación de recepción y la deduplicación de reintentos serían mejoras de confiabilidad adicionales.",
    decisionTwoTitle: "Un ciclo de cuentas conectado",
    decisionTwoBody: "La verificación de correo, las sesiones JWT, el hash de contraseñas con bcrypt y la recuperación de cuenta conectan el registro con la aplicación privada. La insignia por dominio institucional es distinta de la confirmación del correo.",
    decisionThreeTitle: "Preparar las imágenes en el navegador",
    decisionThreeBody: "Canvas prepara fotos recortadas en el navegador; el almacenamiento externo recibe los archivos resultantes. Un selector de intereses virtualizado admite un catálogo amplio sin renderizar todas las opciones a la vez.",
    engineeringImageAlt: "Diagrama del almacenamiento de mensajes, la distribución con Socket.IO y la recuperación del historial",
    engineeringCaption: "La decisión de ingeniería: guardar, emitir y recuperar.",
    repositoryLink: "Ver el repositorio público de presentación en GitHub",
    ownershipEyebrow: "04 / Responsabilidad a lo largo del tiempo",
    ownershipTitleFirst: "Construir el producto.",
    ownershipTitleSecond: "Mantenerlo funcionando.",
    ownershipIntro: "Mi participación abarcó decisiones de producto, diseño de interfaz, frontend, backend y despliegue. El lanzamiento original y la recuperación de 2026 son dos etapas distintas de ese trabajo.",
    originalPeriod: "Producto original",
    originalTitle: "Lanzada para una comunidad universitaria.",
    originalBody: "React y TypeScript en el frontend; Express, Socket.IO y MongoDB detrás de las cuentas y las conversaciones. El frontend estático y la API usaron Render, con dominio propio, fotos en S3 y correo SMTP.",
    originalRole: "Diseño de producto · Desarrollo full-stack · Despliegue en la nube",
    recoveryPeriod: "Recuperación / 2026",
    recoveryTitle: "Recuperar la aplicación existente.",
    recoveryBody: "La recuperación conserva las cuentas y los mensajes existentes en MongoDB. Docker, Caddy y HTTPS se ejecutan en un servidor Hetzner existente. Las nuevas fotos usan la cuenta Cloudinary existente; el correo utiliza SMTP con STARTTLS obligatorio.",
    recoveryRole: "Controles de sesión y pertenencia a chats · Protección de campos privados · Mantenimiento",
    photoLimitation: "El recorrido local usa fotos originales que siguen disponibles en Cloudinary. Las fotos históricas de S3 siguen sin acceso y se conservan sus referencias; las nuevas subidas usan Cloudinary.",
    evidenceTitle: "Una nota sobre la evidencia de adopción",
    evidenceMain: "El fundador registró 1,800 cuentas en un conteo histórico de MongoDB realizado en otra computadora. Es una medición declarada por su autor que no se reprodujo de forma independiente durante la recuperación de 2026.",
    evidenceBackup: "Un export conservado por separado contiene 681 registros de cuenta y 2,129 mensajes guardados, distintos y no vacíos. Describe otro corte de la historia de la aplicación: esos mensajes no deben presentarse como la misma cohorte o período que el conteo de 1,800 cuentas.",
    evidenceLimits: "El export conservado incluye referencias a cuentas y chats ausentes. Los registros no verifican personas únicas y no se afirma MAU, DAU ni retención. Los respaldos que se solapan no se suman.",
    contactEyebrow: "Pierre Burciaga / Software engineer",
    contactTitleFirst: "Construyamos lo siguiente",
    contactTitleSecond: "que sea útil.",
    githubProfile: "Perfil de GitHub",
    openApp: "Abrir la aplicación",
    appNote: "Se requiere una cuenta para explorar las funciones privadas.",
    footerPrivacy: "Cuatro perfiles originales, con sus fotos reales y datos públicos, se muestran en una copia local aislada. El registro usa valores de ejemplo; el chat, cuentas locales controladas y mensajes preparados. No se copiaron datos de contacto privados ni conversaciones existentes. La app pública conserva sus cuentas originales.",
    backToTop: "Volver al inicio ↑",
  };

  const textElements = [...document.querySelectorAll("[data-i18n]")];
  const attributeKinds = ["aria-label", "alt"];
  const english = new Map(textElements.map((element) => [element.dataset.i18n, element.textContent]));
  const attributeElements = attributeKinds.flatMap((attribute) => [...document.querySelectorAll(`[data-i18n-${attribute}]`)].map((element) => ({ element, attribute, key: element.getAttribute(`data-i18n-${attribute}`), english: element.getAttribute(attribute) })));
  const toggle = document.getElementById("language-toggle");
  const descriptions = {
    en: "Inlooveu: a university social platform built and launched by Pierre Burciaga. A 120-second walkthrough with original profile photos and public details, registration forms, and persistent messaging.",
    es: "Inlooveu: una plataforma social universitaria creada y lanzada por Pierre Burciaga. Un recorrido de 120 segundos con fotos y datos públicos originales de perfiles, formularios de registro y mensajes persistentes.",
  };
  let language = "en";
  function selectCaptions() {
    const video = document.getElementById("demo-video");
    for (const track of video.textTracks) track.mode = track.language === language ? "showing" : "disabled";
  }
  function setLanguage(next) {
    language = next === "es" ? "es" : "en";
    document.documentElement.lang = language;
    for (const element of textElements) element.textContent = language === "es" ? spanish[element.dataset.i18n] || english.get(element.dataset.i18n) : english.get(element.dataset.i18n);
    for (const item of attributeElements) item.element.setAttribute(item.attribute, language === "es" ? spanish[item.key] || item.english : item.english);
    toggle.replaceChildren(document.createTextNode(language === "en" ? "Español " : "English "));
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true"); arrow.textContent = "↗"; toggle.append(arrow);
    toggle.setAttribute("aria-label", language === "en" ? "Read this website in Spanish" : "Leer este sitio en inglés");
    document.querySelector('meta[name="description"]').content = descriptions[language];
    selectCaptions();
    try { localStorage.setItem("inlooveu-showcase-language", language); } catch { /* The page also works without browser storage. */ }
  }
  toggle.addEventListener("click", () => setLanguage(language === "en" ? "es" : "en"));
  try { if (localStorage.getItem("inlooveu-showcase-language") === "es") setLanguage("es"); } catch { /* English is the default. */ }

  const config = window.INLOOVEU_SHOWCASE || {};
  const assets = config.assets || {};
  for (const figure of document.querySelectorAll("figure[data-asset]")) {
    const asset = assets[figure.dataset.asset];
    if (!asset) continue;
    const probe = new Image();
    probe.onload = () => { figure.querySelector("img").src = asset; figure.hidden = false; };
    probe.onerror = () => { figure.hidden = true; };
    probe.src = asset;
  }
  async function prepareVideo() {
    if (!assets.video) return;
    try {
      const response = await fetch(assets.video, { method: "HEAD", cache: "no-store" });
      if (!response.ok || (response.headers.get("content-type") || "").includes("text/html")) return;
      const video = document.getElementById("demo-video");
      video.querySelector("source").src = assets.video;
      for (const track of video.querySelectorAll("track[data-caption-language]")) {
        const captionPath = assets.captions?.[track.dataset.captionLanguage];
        if (captionPath) track.src = captionPath;
        track.default = track.dataset.captionLanguage === language;
        track.addEventListener("load", selectCaptions);
      }
      if (assets.poster) video.poster = assets.poster;
      video.load();
      selectCaptions();
      document.getElementById("walkthrough").hidden = false;
      document.getElementById("watch-link").hidden = false;
    } catch { /* Missing media stays out of the published page, without fake previews. */ }
  }
  prepareVideo();
  for (const button of document.querySelectorAll("button[data-video-time]")) {
    button.addEventListener("click", async () => {
      const video = document.getElementById("demo-video");
      const start = Number(button.dataset.videoTime);
      if (!Number.isFinite(start) || start < 0) return;
      try {
        if (video.readyState < 1) {
          await new Promise((resolve, reject) => {
            const cleanup = () => {
              video.removeEventListener("loadedmetadata", loaded);
              video.removeEventListener("error", failed);
            };
            const loaded = () => { cleanup(); resolve(); };
            const failed = () => { cleanup(); reject(new Error("Video metadata unavailable")); };
            video.addEventListener("loadedmetadata", loaded, { once: true });
            video.addEventListener("error", failed, { once: true });
          });
        }
        video.currentTime = start;
        await video.play();
      } catch { /* Native video controls remain available if playback is blocked. */ }
    });
  }
  if (/^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/.test(config.repositoryUrl || "")) {
    for (const link of document.querySelectorAll(".repository-link")) {
      link.href = config.repositoryUrl; link.target = "_blank"; link.rel = "noopener noreferrer"; link.hidden = false;
    }
  }
  for (const link of document.querySelectorAll('a[href="#evidence"]')) link.addEventListener("click", () => { document.getElementById("evidence").open = true; });
})();
