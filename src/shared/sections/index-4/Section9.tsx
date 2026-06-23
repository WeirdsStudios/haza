import { useState, useRef, useEffect } from "react";
import { getBotResponse, ChatMessage } from "@/hm/chatbot-engine";
import { BOT_WELCOME } from "@/hm/chatbot-data";

const BULLETS = [
    "Describe tu negocio y tu operación actual",
    "Cuéntanos qué problema quieres resolver",
    "Recibe una propuesta personalizada",
];

const SEND_ICON = (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path
            d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const WA_ICON = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.528 5.855L.057 23.882l6.174-1.617A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.032-1.374l-.36-.214-3.742.98 1.003-3.638-.235-.374A9.848 9.848 0 0 1 2.118 12C2.118 6.535 6.535 2.118 12 2.118c5.465 0 9.882 4.417 9.882 9.882 0 5.465-4.417 9.882-9.882 9.882z" />
    </svg>
);

export default function Section9() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: "bot", text: BOT_WELCOME },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const conversationRef = useRef<string[]>([BOT_WELCOME]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const sendMessage = () => {
        const text = input.trim();
        if (!text || isTyping) return;

        const userMsg: ChatMessage = { role: "user", text };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        conversationRef.current.push(text);

        const delay = 600 + Math.random() * 600;
        setTimeout(() => {
            const response = getBotResponse(text, conversationRef.current);
            conversationRef.current.push(response.text);
            setMessages((prev) => [...prev, response]);
            setIsTyping(false);
        }, delay);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <section className="pt-120 pb-120 bg-neutral-50">
            {/* Typing animation keyframes */}
            <style>{`
                @keyframes hm-bounce {
                    0%, 60%, 100% { transform: translateY(0); }
                    30% { transform: translateY(-6px); }
                }
            `}</style>

            <div className="container">
                <div className="row g-5 align-items-center" style={{ minHeight: 500 }}>
                    {/* Left column */}
                    <div className="col-lg-5">
                        <h2 className="fw-700 mb-4">¿Listo para digitalizar tu operación?</h2>
                        <p className="fz-font-lg mb-4 opacity-75">
                            Aquí puedes iniciar una conversación directa con nuestro sistema. Cuéntanos
                            cómo funciona tu operación hoy, qué problemas quieres resolver y qué esperas
                            de un sistema digital. Sin formularios, sin pasos complicados — solo una
                            conversación honesta sobre lo que necesitas.
                        </p>
                        <ul className="list-unstyled mb-4">
                            {BULLETS.map((b) => (
                                <li key={b} className="mb-2 d-flex gap-2 align-items-start">
                                    <span className="opacity-50 flex-shrink-0 mt-1">·</span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://wa.me/5215612934010"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fw-600 text-decoration-underline"
                        >
                            Prefiero WhatsApp →
                        </a>
                    </div>

                    {/* Right column — Chat widget */}
                    <div className="col-lg-7">
                        <div
                            className="changeless"
                            style={{
                                background: "#0f0f0f",
                                borderRadius: 16,
                                border: "1px solid rgba(255,255,255,0.08)",
                                display: "flex",
                                flexDirection: "column",
                                height: 480,
                                overflow: "hidden",
                            }}
                        >
                            {/* Chat header */}
                            <div
                                style={{
                                    padding: "16px 20px",
                                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    flexShrink: 0,
                                }}
                            >
                                <div
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: "50%",
                                        background: "rgba(255,255,255,0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <img
                                        src="/assets/imgs/hm/logohm_isotipo.svg"
                                        alt="HM"
                                        style={{ width: 20, height: 20, filter: "invert(1)" }}
                                    />
                                </div>
                                <div>
                                    <div style={{ color: "#fff", fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>
                                        Haza Munguia Studio
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}>
                                        <span
                                            style={{
                                                width: 7,
                                                height: 7,
                                                borderRadius: "50%",
                                                background: "#22c55e",
                                                display: "inline-block",
                                            }}
                                        />
                                        <span style={{ color: "#22c55e", fontSize: 11, fontWeight: 500 }}>
                                            En línea
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Messages area */}
                            <div
                                style={{
                                    flex: 1,
                                    overflowY: "auto",
                                    padding: "16px 20px",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: "flex",
                                            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                                            marginBottom: "0.75rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                maxWidth: "80%",
                                                padding: "0.65rem 1rem",
                                                borderRadius:
                                                    msg.role === "user"
                                                        ? "16px 16px 4px 16px"
                                                        : "16px 16px 16px 4px",
                                                background:
                                                    msg.role === "user"
                                                        ? "var(--at-theme-primary, #FF6530)"
                                                        : "rgba(255,255,255,0.08)",
                                                color: "#fff",
                                                fontSize: "0.875rem",
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {msg.text}
                                            {msg.showWhatsApp && msg.whatsappLink && (
                                                <a
                                                    href={msg.whatsappLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.5rem",
                                                        marginTop: "0.75rem",
                                                        padding: "0.6rem 1rem",
                                                        background: "#25D366",
                                                        borderRadius: 8,
                                                        color: "#fff",
                                                        fontWeight: 600,
                                                        fontSize: "0.85rem",
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    {WA_ICON}
                                                    Hablar con Haza por WhatsApp
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {/* Typing indicator */}
                                {isTyping && (
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: 4,
                                            padding: "0.75rem 1rem",
                                            width: "fit-content",
                                            background: "rgba(255,255,255,0.08)",
                                            borderRadius: "16px 16px 16px 4px",
                                            marginBottom: "0.75rem",
                                        }}
                                    >
                                        {[0, 1, 2].map((i) => (
                                            <div
                                                key={i}
                                                style={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: "50%",
                                                    background: "rgba(255,255,255,0.5)",
                                                    animation: `hm-bounce 1.2s ${i * 0.2}s infinite`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input row */}
                            <div
                                style={{
                                    padding: "12px 16px",
                                    borderTop: "1px solid rgba(255,255,255,0.08)",
                                    display: "flex",
                                    gap: 10,
                                    alignItems: "center",
                                    flexShrink: 0,
                                }}
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Escribe tu mensaje..."
                                    style={{
                                        flex: 1,
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        borderRadius: 24,
                                        padding: "9px 16px",
                                        color: "#fff",
                                        fontSize: 14,
                                        outline: "none",
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={sendMessage}
                                    disabled={isTyping}
                                    style={{
                                        width: 38,
                                        height: 38,
                                        borderRadius: "50%",
                                        background: "var(--at-theme-primary, #FF6530)",
                                        border: "none",
                                        color: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: isTyping ? "default" : "pointer",
                                        flexShrink: 0,
                                        opacity: isTyping ? 0.5 : 1,
                                        transition: "opacity 0.2s",
                                    }}
                                >
                                    {SEND_ICON}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
