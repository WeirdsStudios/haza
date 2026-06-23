import {
  INDUSTRIES,
  PROBLEMS,
  CLOSE_TRIGGERS,
  FALLBACK_RESPONSES,
  buildWhatsAppLink,
} from "./chatbot-data";

export interface ChatMessage {
  role: "bot" | "user";
  text: string;
  showWhatsApp?: boolean;
  whatsappLink?: string;
}

export function getBotResponse(
  userMessage: string,
  conversationHistory: string[]
): ChatMessage {
  const msg = userMessage.toLowerCase().trim();
  const history = [...conversationHistory, userMessage];

  // 1. ¿El usuario quiere cerrar / hablar con Haza?
  const wantToClose = CLOSE_TRIGGERS.some((t) => msg.includes(t));
  if (wantToClose || history.length > 8) {
    return {
      role: "bot",
      text:
        "Perfecto, con gusto te conecta directamente " +
        "con Haza. Haz clic abajo para abrir WhatsApp " +
        "— se enviará un resumen de tu consulta " +
        "para que pueda prepararse:",
      showWhatsApp: true,
      whatsappLink: buildWhatsAppLink(history),
    };
  }

  // 2. ¿Pregunta sobre problema específico?
  for (const problem of PROBLEMS) {
    if (problem.keywords.some((k) => msg.includes(k))) {
      return { role: "bot", text: problem.response };
    }
  }

  // 3. ¿Menciona una industria?
  for (const industry of INDUSTRIES) {
    if (industry.keywords.some((k) => msg.includes(k))) {
      return { role: "bot", text: industry.response };
    }
  }

  // 4. ¿Mensaje muy corto o saludo?
  if (
    msg.length < 10 ||
    ["hola", "hi", "hey", "buenas", "buenos"].some((g) => msg.includes(g))
  ) {
    return {
      role: "bot",
      text:
        "¡Hola! ¿Qué tipo de negocio tienes? " +
        "Cuéntame un poco y te oriento sobre " +
        "qué sistema encaja mejor con tu operación.",
    };
  }

  // 5. Fallback aleatorio
  const fallback =
    FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
  return { role: "bot", text: fallback };
}
