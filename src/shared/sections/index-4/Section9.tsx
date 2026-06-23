import { useState, useRef, useEffect } from "react";

type Message = { from: "bot" | "user"; text: string };

const INITIAL_MESSAGE: Message = {
    from: "bot",
    text: "Hola 👋 Soy el asistente de Haza Munguia Studio. Cuéntame: ¿qué tipo de negocio tienes y qué problema quieres resolver con tecnología?",
};

const BOT_REPLY =
    "Gracias por escribirnos. Haza revisará tu mensaje y te contactará en menos de 24 horas. También puedes escribirnos por WhatsApp si prefieres una respuesta más rápida.";

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

export default function Section9() {
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [replied, setReplied] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = () => {
        const text = input.trim();
        if (!text) return;
        setMessages((prev) => [...prev, { from: "user", text }]);
        setInput("");
        if (!replied) {
            setTimeout(() => {
                setMessages((prev) => [...prev, { from: "bot", text: BOT_REPLY }]);
                setReplied(true);
            }, 900);
        }
    };

    return (
        <section className="pt-120 pb-120 bg-neutral-50">
            <div className="container">
                <div className="row g-5 align-items-center" style={{ minHeight: 500 }}>
                    {/* Left column — 40% */}
                    <div className="col-lg-5">
                        <h2 className="fw-700 mb-4">¿Listo para digitalizar tu operación?</h2>
                        <p className="fz-font-lg mb-4 opacity-75">
                            Aquí puedes iniciar una conversación directa con nuestro sistema. Cuéntanos cómo funciona tu operación hoy, qué problemas quieres resolver y qué esperas de un sistema digital. Sin formularios, sin pasos complicados — solo una conversación honesta sobre lo que necesitas.
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

                    {/* Right column — 60%: Chat widget */}
                    <div className="col-lg-7">
                        <div
                            className="changeless"
                            style={{
                                background: "#0f0f0f",
                                borderRadius: 16,
                                border: "1px solid rgba(255,255,255,0.08)",
                                display: "flex",
                                flexDirection: "column",
                                height: 460,
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
                                    gap: 10,
                                }}
                            >
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: "flex",
                                            justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                                        }}
                                    >
                                        <div
                                            style={{
                                                maxWidth: "78%",
                                                padding: "10px 14px",
                                                borderRadius:
                                                    msg.from === "user"
                                                        ? "16px 16px 4px 16px"
                                                        : "16px 16px 16px 4px",
                                                background:
                                                    msg.from === "user"
                                                        ? "#3b82f6"
                                                        : "rgba(255,255,255,0.08)",
                                                color: "#fff",
                                                fontSize: 14,
                                                lineHeight: 1.55,
                                            }}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                <div ref={bottomRef} />
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
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            sendMessage();
                                        }
                                    }}
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
                                    style={{
                                        width: 38,
                                        height: 38,
                                        borderRadius: "50%",
                                        background: "#3b82f6",
                                        border: "none",
                                        color: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        flexShrink: 0,
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
