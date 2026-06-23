export const BOT_NAME = "Asistente Haza Munguia Studio";

export const BOT_WELCOME =
  "Hola 👋 Soy el asistente de Haza Munguia Studio. " +
  "Cuéntame: ¿qué tipo de negocio tienes?";

// ── INDUSTRIAS ──────────────────────────────────────
export const INDUSTRIES = [
  {
    keywords: [
      "clínica", "clinica", "doctor", "médico", "medico",
      "dentista", "dental", "consultorio", "salud",
      "paciente", "spa", "estética", "estetica",
      "belleza", "masaje", "wellness", "gym", "gimnasio",
    ],
    id: "salud",
    label: "Salud y bienestar",
    demo: "VidaClínica",
    demoDesc:
      "sistema de citas, historial de pacientes " +
      "y recordatorios automáticos",
    module: "Reservas y CRM",
    response:
      "Para negocios de salud y bienestar tenemos " +
      "VidaClínica — un sistema de citas donde tus " +
      "pacientes/clientes agendan solos en línea, " +
      "tú ves todo en un panel y ellos reciben " +
      "confirmación automática. ¿Cuál es tu " +
      "principal problema hoy?",
  },
  {
    keywords: [
      "restaurante", "comida", "cocina", "menú", "menu",
      "café", "cafeteria", "bar", "delivery", "pedido",
      "mesero", "mesa", "orden", "food",
    ],
    id: "restaurante",
    label: "Restaurantes y alimentos",
    demo: "La Carta",
    demoDesc:
      "menú digital, pedidos en línea y panel " +
      "de administración",
    module: "Ventas Digitales",
    response:
      "Para restaurantes tenemos La Carta — menú " +
      "digital, pedidos en línea, y un panel donde " +
      "ves todos los pedidos en tiempo real. " +
      "¿Qué necesitas resolver primero: pedidos, " +
      "reservas de mesa, o las dos cosas?",
  },
  {
    keywords: [
      "tienda", "ropa", "productos", "vender", "venta",
      "catálogo", "catalogo", "inventario", "stock",
      "boutique", "retail", "ecommerce", "e-commerce",
      "artesanía", "artesania", "joyería", "joyeria",
    ],
    id: "retail",
    label: "Tienda y e-commerce",
    demo: "Selecto",
    demoDesc:
      "tienda completa con carrito, pagos " +
      "y gestión de inventario",
    module: "Ventas Digitales",
    response:
      "Para tiendas tenemos Selecto — catálogo " +
      "digital, carrito de compras, pagos con " +
      "tarjeta y panel de inventario. " +
      "¿Vendes solo en físico, en línea, o ambos?",
  },
  {
    keywords: [
      "hotel", "hospedaje", "experiencia", "tour",
      "viaje", "turismo", "renta", "airbnb", "cuarto",
      "habitación", "habitacion", "evento", "reserva",
    ],
    id: "hospitalidad",
    label: "Hospitalidad y turismo",
    demo: "Reserva+",
    demoDesc:
      "reservas en tiempo real, disponibilidad " +
      "y perfil de huésped",
    module: "Reservas y CRM",
    response:
      "Para hospitalidad tenemos Reserva+ — " +
      "calendario de disponibilidad, reservas " +
      "en tiempo real y perfil de cada huésped " +
      "o participante. ¿Qué tipo de reservas " +
      "manejas actualmente?",
  },
  {
    keywords: [
      "despacho", "consultoría", "consultoria",
      "arquitecto", "abogado", "contador", "ingeniero",
      "servicio", "cotización", "cotizacion", "proyecto",
      "propuesta", "agencia", "freelance", "diseño",
    ],
    id: "servicios",
    label: "Servicios profesionales",
    demo: "CotizaPro",
    demoDesc: "cotizaciones automáticas e inteligentes",
    module: "Cotizador Inteligente",
    response:
      "Para servicios profesionales tenemos " +
      "CotizaPro — tus clientes responden unas " +
      "preguntas y reciben su cotización al " +
      "instante. Tú recibes el lead listo para " +
      "cerrar. ¿Cuánto tiempo te toma cotizar " +
      "un proyecto hoy?",
  },
];

// ── PROBLEMAS COMUNES ────────────────────────────────
export const PROBLEMS = [
  {
    keywords: [
      "whatsapp", "mensaje", "caos", "desorden",
      "confusión", "confusion", "perder", "pierdo",
    ],
    response:
      "Ese es el problema más común — todo en " +
      "WhatsApp se pierde o desordena. Nuestro " +
      "sistema centraliza todo: el cliente agenda, " +
      "paga o cotiza en tu plataforma, y tú " +
      "recibes solo la notificación. ¿Tienes " +
      "idea de cuántos clientes pierdes por " +
      "eso al mes?",
  },
  {
    keywords: [
      "precio", "costo", "cuánto", "cuanto", "cobras",
      "inversión", "inversion", "presupuesto",
    ],
    response:
      "Los precios dependen de los módulos que " +
      "necesitas. La App Integrada empieza en " +
      "$15,000 MXN con un módulo incluido. " +
      "Puedes usar el cotizador del sitio para " +
      "ver tu estimado exacto, o cuéntame qué " +
      "necesitas y te digo qué aplica para ti. " +
      "¿Qué módulos te interesan?",
  },
  {
    keywords: [
      "tiempo", "cuándo", "cuando", "rápido", "rapido",
      "días", "dias", "semanas", "entrega",
    ],
    response:
      "El tiempo de entrega varía según la " +
      "complejidad. Una App Integrada está lista " +
      "en 3 a 4 semanas. Una App a Medida puede " +
      "tomar de 6 a 10 semanas. ¿Tienes alguna " +
      "fecha límite en mente?",
  },
  {
    keywords: [
      "app", "aplicación", "aplicacion", "celular",
      "móvil", "movil", "ios", "android", "instalar",
    ],
    response:
      "Lo que construimos funciona en celular, " +
      "tablet y computadora desde el primer día " +
      "— sin necesidad de descargarlo de la App " +
      "Store. Tus clientes lo abren desde el " +
      "navegador y lo instalan como app en su " +
      "pantalla de inicio. ¿Eso te funciona?",
  },
  {
    keywords: [
      "demo", "ejemplo", "ver", "muestra", "funciona",
      "prueba",
    ],
    response:
      "Tenemos 5 demos en vivo que puedes explorar " +
      "ahora mismo — cada una muestra un sistema " +
      "diferente funcionando con datos reales. " +
      "También puedes ver la vista del dueño del " +
      "negocio en cada demo. ¿Cuál industria te " +
      "interesa más ver?",
  },
];

// ── FRASES DE CIERRE (mandan a WhatsApp) ────────────
export const CLOSE_TRIGGERS = [
  "sí", "si", "claro", "quiero", "me interesa", "adelante",
  "cuándo", "cuando empezamos", "arrancar", "contratar",
  "quiero hablar", "hablar con haza", "llamar", "llamada",
];

// ── RESPUESTAS GENÉRICAS ─────────────────────────────
export const FALLBACK_RESPONSES = [
  "Cuéntame más sobre tu negocio para orientarte mejor.",
  "¿Qué tipo de negocio tienes y cuál es tu principal " +
    "problema hoy?",
  "No estoy seguro de entender. ¿Puedes describirme " +
    "qué hace tu empresa y qué quieres mejorar?",
];

export const WHATSAPP_NUMBER = "5215612934010";

export function buildWhatsAppLink(conversation: string[]): string {
  const summary = conversation
    .filter((_, i) => i % 2 === 0)
    .slice(1)
    .join(" | ")
    .substring(0, 300);
  const msg = encodeURIComponent(
    `Hola Haza, vengo del sitio web.\n\n` +
      `Mi consulta: ${summary}\n\n` +
      `Me gustaría hablar sobre mis opciones.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
