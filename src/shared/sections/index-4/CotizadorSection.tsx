import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Palette ────────────────────────────────────────────────────────────────

const ACCENT = "#FF6530";
const ACCENT_BG = "rgba(255, 101, 48, 0.10)";
const CARD_BG = "#1a1a1a";
const BORDER = "1px solid rgba(255,255,255,0.08)";
const BORDER_ACTIVE = `1px solid ${ACCENT}`;
const TEXT_DIM = "rgba(255,255,255,0.45)";
const TEXT_MID = "rgba(255,255,255,0.65)";

// ─── Icons (same SVG pattern as Section2 / at-service-card-icon) ─────────────

const ICON_STRATEGY = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 11.6412 18.3563 14.9984 22.4971 15C18.3563 15.0016 15 18.3588 15 22.5C15 18.3579 11.6421 15 7.5 15C3.35786 15 5.08894e-07 18.3579 3.27835e-07 22.5L0 30L7.5 30C11.6421 30 15 26.6421 15 22.5C15 26.6421 18.3579 30 22.5 30L30 30L30 22.5C30 18.3588 26.6437 15.0016 22.5029 15C26.6437 14.9984 30 11.6412 30 7.5L30 6.31805e-06L22.5 6.64589e-06C18.3579 6.82695e-06 15 3.35787 15 7.5C15 3.35787 11.6421 5.21315e-06 7.5 5.39421e-06L2.62268e-06 3.8147e-06L1.63918e-06 7.5C1.096e-06 11.6421 3.35786 15 7.5 15Z" fill="currentColor" />
    </svg>
);
const ICON_DESIGN = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M15 0H30V15L15 0Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 15V0H7.5L0 7.5V15V30H15H22.5L30 22.5V15H15ZM15 15V30L0 15H15Z" fill="currentColor" />
    </svg>
);
const ICON_NETWORK = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M30 0L20 10L10 0L0 10V30L10 20L20 30L30 20V0ZM10 20V10H20V20H10Z" fill="currentColor" />
    </svg>
);
const ICON_BUILD = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M10 10L20 0H30V10L20 20V10H10Z" fill="currentColor" />
        <path d="M20 20H30V30H20V20Z" fill="currentColor" />
        <path d="M10 10L0 20V30H10L20 20H10V10Z" fill="currentColor" />
        <path d="M10 10H0V0H10V10Z" fill="currentColor" />
    </svg>
);

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
    salud:       ICON_STRATEGY,
    servicios:   ICON_BUILD,
    productos:   ICON_NETWORK,
    restaurante: ICON_DESIGN,
    belleza:     ICON_STRATEGY,
    otro:        ICON_BUILD,
};

const DOMO_ICONS: Record<string, React.ReactNode> = {
    ventas:    ICON_NETWORK,
    crm:       ICON_STRATEGY,
    cotizador: ICON_DESIGN,
    agente:    ICON_BUILD,
};

// ─── Data ────────────────────────────────────────────────────────────────────

const INDUSTRIES = [
    { id: "salud",       emoji: "🏥", title: "Salud y bienestar",        sub: "Clínica, consultorio, spa, gym..." },
    { id: "servicios",   emoji: "⚖️", title: "Servicios profesionales",  sub: "Despacho, consultoría, arquitectura..." },
    { id: "productos",   emoji: "🛍️", title: "Vendo productos",          sub: "Tienda, distribuidora, manufactura..." },
    { id: "restaurante", emoji: "🍽️", title: "Hospitalidad y alimentos", sub: "Restaurante, hotel, catering..." },
    { id: "belleza",     emoji: "💆", title: "Belleza y estética",       sub: "Salón, estudio, uñas, bronceado..." },
    { id: "otro",        emoji: "🏢", title: "Otro tipo de negocio",     sub: "Cuéntanos y te orientamos" },
];

const DOMOS = [
    {
        id: "ventas",
        icon: "🛒",
        name: "Ventas Digitales",
        desc: "Tu catálogo, pedidos y cobros — online y presencial — en un solo lugar. Tienda en línea, punto de venta o sistema de delivery.",
        price: 15000,
        tag: "MÁS SOLICITADO",
        bestFor: ["productos", "restaurante"],
    },
    {
        id: "crm",
        icon: "📅",
        name: "CRM y Reservas",
        desc: "Tus clientes agendan solos. Historial, recordatorios y seguimiento automatizados. Como tener un recepcionista 24/7.",
        price: 10000,
        tag: "",
        bestFor: ["salud", "belleza", "servicios"],
    },
    {
        id: "cotizador",
        icon: "📊",
        name: "Cotizador Inteligente",
        desc: "El cliente entra, responde preguntas sobre lo que necesita y recibe su cotización al instante. Tú recibes el lead listo para cerrar.",
        price: 10000,
        tag: "",
        bestFor: ["servicios", "productos", "otro"],
    },
    {
        id: "agente",
        icon: "🤖",
        name: "Atención Automatizada",
        desc: "Un agente con IA que responde preguntas, califica prospectos y atiende a tus clientes sin que intervengas — de día y de noche.",
        price: 15000,
        tag: "CON IA",
        bestFor: ["salud", "servicios", "restaurante"],
    },
];

const BASE_PRICE = 15000;
const DOMO_PRICES: Record<string, number> = {
    ventas:    15000,
    crm:       10000,
    cotizador: 10000,
    agente:    15000,
};
const MEDIDA_THRESHOLD = 3;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function calcPrice(selectedIds: string[]): number {
    if (selectedIds.length <= 1) return BASE_PRICE;
    const extras = selectedIds.slice(1);
    const extraCost = extras.reduce((sum, id) => sum + (DOMO_PRICES[id] ?? 10000), 0);
    return BASE_PRICE + extraCost;
}

function getRecommendation(selectedIds: string[]): "integrada" | "medida" {
    return selectedIds.length >= MEDIDA_THRESHOLD ? "medida" : "integrada";
}

function fmt(n: number): string {
    return `$${n.toLocaleString("es-MX")} MXN`;
}

function buildWhatsAppLink(type: string, domos: string[], industryId: string, price: number): string {
    const ind = INDUSTRIES.find((i) => i.id === industryId)?.title ?? industryId;
    const names = domos.map((d) => DOMOS.find((x) => x.id === d)?.name ?? d).join(", ");
    const app = type === "medida" ? "App a Medida" : "App Integrada";
    const msg = `Hola, me interesa una ${app} con los módulos: ${names}. Mi negocio es de ${ind}. Mi estimado es ${fmt(price)}.`;
    return `https://wa.me/5215612934010?text=${encodeURIComponent(msg)}`;
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressBar({ step }: { step: number }) {
    const STEPS = ["Industria", "Módulos", "Propuesta"];
    return (
        <div className="d-flex align-items-center gap-3 mb-60">
            {STEPS.map((label, i) => {
                const n = i + 1;
                const active = n === step;
                const done = n < step;
                return (
                    <div key={label} className="d-flex align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                            <div
                                style={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: "50%",
                                    border: `2px solid ${active || done ? ACCENT : "rgba(255,255,255,0.2)"}`,
                                    background: done ? ACCENT : "transparent",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    transition: "all 0.3s",
                                }}
                            >
                                {done ? (
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                        <path d="M2 5.5L4.5 8L9 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <span style={{ fontSize: 11, fontWeight: 700, color: active ? ACCENT : "rgba(255,255,255,0.3)" }}>
                                        {n}
                                    </span>
                                )}
                            </div>
                            <span
                                style={{
                                    fontSize: 13,
                                    fontWeight: active ? 600 : 400,
                                    color: active ? "#fff" : "rgba(255,255,255,0.35)",
                                    transition: "all 0.3s",
                                }}
                            >
                                {label}
                            </span>
                        </div>
                        {i < STEPS.length - 1 && (
                            <div
                                style={{
                                    width: 36,
                                    height: 1,
                                    background: done ? ACCENT : "rgba(255,255,255,0.12)",
                                    transition: "background 0.4s",
                                }}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

// ─── Back button ──────────────────────────────────────────────────────────────

function BackBtn({ onClick }: { onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            style={{
                background: "none",
                border: "none",
                color: TEXT_DIM,
                cursor: "pointer",
                padding: "0 0 28px 0",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                gap: 6,
            }}
        >
            ← Volver
        </button>
    );
}

// ─── Step 1: Industria ────────────────────────────────────────────────────────

function StepIndustria({ onSelect }: { onSelect: (id: string) => void }) {
    const [hovered, setHovered] = useState("");

    return (
        <div>
            <div className="mb-50">
                <h2 className="fw-700 text-white mb-3">¿Qué tipo de negocio tienes?</h2>
                <p style={{ color: TEXT_MID, fontSize: 18 }}>
                    Esto nos ayuda a sugerirte los módulos correctos.
                </p>
            </div>
            <div className="row g-3">
                {INDUSTRIES.map((ind) => {
                    const active = hovered === ind.id;
                    return (
                        <div key={ind.id} className="col-lg-4 col-md-6">
                            <button
                                type="button"
                                onClick={() => onSelect(ind.id)}
                                onMouseEnter={() => setHovered(ind.id)}
                                onMouseLeave={() => setHovered("")}
                                style={{
                                    width: "100%",
                                    background: active ? ACCENT_BG : CARD_BG,
                                    border: active ? BORDER_ACTIVE : BORDER,
                                    borderRadius: 12,
                                    padding: "24px 20px",
                                    textAlign: "left",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                }}
                            >
                                <div className="at-service-card-icon" style={{ color: "#fff", marginBottom: 14 }}>{INDUSTRY_ICONS[ind.id]}</div>
                                <div style={{ color: "#fff", fontWeight: 600, fontSize: 15, marginBottom: 4 }}>
                                    {ind.title}
                                </div>
                                <div style={{ color: TEXT_DIM, fontSize: 13 }}>{ind.sub}</div>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ─── Step 2: Domos ────────────────────────────────────────────────────────────

function StepDomos({
    industry,
    selected,
    onToggle,
    onBack,
    onNext,
}: {
    industry: string;
    selected: string[];
    onToggle: (id: string) => void;
    onBack: () => void;
    onNext: () => void;
}) {
    const price = calcPrice(selected);
    const canAdvance = selected.length > 0;

    return (
        <div>
            <BackBtn onClick={onBack} />
            <div className="mb-50">
                <h2 className="fw-700 text-white mb-3">¿Qué necesita tu operación?</h2>
                <p style={{ color: TEXT_MID, fontSize: 18 }}>
                    Selecciona uno o más módulos. El precio se actualiza en tiempo real.
                </p>
            </div>

            {/* Base incluida — always selected, non-removable */}
            <div style={{
                width: "100%",
                border: "1.5px solid var(--at-theme-primary)",
                borderRadius: 12,
                background: "rgba(240,70,14,0.06)",
                padding: "1.5rem 2rem",
                marginBottom: "1.5rem",
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{
                            width: 28, height: 28,
                            borderRadius: "50%",
                            background: "var(--at-theme-primary)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0,
                        }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 7L5.5 10.5L12 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span style={{ fontWeight: 600, fontSize: "1rem", color: "white" }}>
                            Presencia Profesional
                        </span>
                    </div>
                    <span style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        background: "var(--at-theme-primary)",
                        color: "white",
                        padding: "3px 10px",
                        borderRadius: 100,
                        fontWeight: 500,
                    }}>
                        Siempre incluido
                    </span>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-2">
                    {[
                        "Diseño personalizado, SEO, dominio y hosting por 1 año",
                        "Catálogo interactivo de servicios o productos con filtros",
                        "Sistema de citas o reservas online en tiempo real",
                        "Integración directa con Google Calendar",
                        "Formularios inteligentes con lógica condicional",
                        "Panel de administración propio — sin tocar código",
                        "Hasta 8 secciones completas para mostrar todo lo que ofreces",
                        "30 días de soporte técnico post-entrega sin costo",
                    ].map((feature, i) => (
                        <div key={i} className="col">
                            <div style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "0.5rem",
                                fontSize: "0.82rem",
                                lineHeight: 1.4,
                                color: "rgba(255,255,255,0.7)",
                            }}>
                                <svg style={{ flexShrink: 0, marginTop: 2 }} width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M1.5 6.5L5 10L11.5 3" stroke="var(--at-theme-primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>{feature}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="row g-3 mb-4">
                {DOMOS.map((domo) => {
                    const isSelected = selected.includes(domo.id);
                    const isRec = domo.bestFor.includes(industry);
                    return (
                        <div key={domo.id} className="col-lg-6">
                            <button
                                type="button"
                                onClick={() => onToggle(domo.id)}
                                style={{
                                    width: "100%",
                                    background: isSelected ? ACCENT_BG : CARD_BG,
                                    border: isSelected ? BORDER_ACTIVE : BORDER,
                                    borderRadius: 12,
                                    padding: "20px",
                                    textAlign: "left",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                }}
                            >
                                {/* Badges */}
                                {(domo.tag || isRec) && (
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        {domo.tag && (
                                            <span
                                                style={{
                                                    background: ACCENT,
                                                    color: "#fff",
                                                    fontSize: 10,
                                                    fontWeight: 700,
                                                    padding: "3px 8px",
                                                    borderRadius: 20,
                                                    letterSpacing: "0.05em",
                                                }}
                                            >
                                                {domo.tag}
                                            </span>
                                        )}
                                        {isRec && (
                                            <span
                                                style={{
                                                    background: ACCENT_BG,
                                                    color: ACCENT,
                                                    border: BORDER_ACTIVE,
                                                    fontSize: 10,
                                                    fontWeight: 600,
                                                    padding: "3px 8px",
                                                    borderRadius: 20,
                                                }}
                                            >
                                                Recomendado para ti
                                            </span>
                                        )}
                                    </div>
                                )}

                                <div className="d-flex align-items-start gap-3">
                                    <div className="at-service-card-icon" style={{ color: "#fff", flexShrink: 0 }}>{DOMO_ICONS[domo.id]}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>
                                            {domo.name}
                                        </div>
                                        <div style={{ color: TEXT_MID, fontSize: 13, lineHeight: 1.55 }}>
                                            {domo.desc}
                                        </div>
                                    </div>
                                    {/* Checkbox */}
                                    <div
                                        style={{
                                            width: 22,
                                            height: 22,
                                            borderRadius: "50%",
                                            border: `2px solid ${isSelected ? ACCENT : "rgba(255,255,255,0.2)"}`,
                                            background: isSelected ? ACCENT : "transparent",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            transition: "all 0.2s",
                                        }}
                                    >
                                        {isSelected && (
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M2 5L4 7L8 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Price panel */}
            <div
                style={{
                    background: "#111",
                    border: BORDER,
                    borderRadius: 12,
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 16,
                    marginTop: 8,
                }}
            >
                <div>
                    <div style={{ color: TEXT_DIM, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4 }}>
                        Tu estimado
                    </div>
                    <div style={{ color: "#fff", fontSize: 30, fontWeight: 700, lineHeight: 1, transition: "all 0.25s" }}>
                        {fmt(price)}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 4 }}>
                        {getRecommendation(selected) === "medida" ? "App a Medida" : "App Integrada"} · {selected.length} módulo{selected.length !== 1 ? "s" : ""} seleccionado{selected.length !== 1 ? "s" : ""}
                    </div>
                </div>
                <button
                    type="button"
                    onClick={onNext}
                    disabled={!canAdvance}
                    style={{
                        background: canAdvance ? ACCENT : "rgba(255,255,255,0.08)",
                        color: canAdvance ? "#fff" : "rgba(255,255,255,0.25)",
                        border: "none",
                        borderRadius: 8,
                        padding: "14px 28px",
                        fontSize: 15,
                        fontWeight: 700,
                        cursor: canAdvance ? "pointer" : "not-allowed",
                        transition: "all 0.2s",
                        whiteSpace: "nowrap",
                    }}
                >
                    Ver mi propuesta →
                </button>
            </div>
        </div>
    );
}

// ─── Step 3: Resultado ────────────────────────────────────────────────────────

function StepResultado({
    selectedDomos,
    industry,
    includeAcomp,
    onToggleAcomp,
    onBack,
    onReset,
}: {
    selectedDomos: string[];
    industry: string;
    includeAcomp: boolean;
    onToggleAcomp: () => void;
    onBack: () => void;
    onReset: () => void;
}) {
    const type = getRecommendation(selectedDomos);
    const price = calcPrice(selectedDomos);
    const waLink = buildWhatsAppLink(type, selectedDomos, industry, price);
    const selectedData = DOMOS.filter((d) => selectedDomos.includes(d.id));

    return (
        <div>
            {/* Top controls */}
            <div className="d-flex align-items-center justify-content-between mb-50 flex-wrap gap-3">
                <BackBtn onClick={onBack} />
                <button
                    type="button"
                    onClick={onReset}
                    style={{
                        background: "none",
                        border: BORDER,
                        color: TEXT_DIM,
                        borderRadius: 6,
                        padding: "8px 16px",
                        fontSize: 13,
                        cursor: "pointer",
                    }}
                >
                    Empezar de nuevo
                </button>
            </div>

            <div className="row g-5">
                {/* Left: main content */}
                <div className="col-lg-7">
                    {/* Badge */}
                    <span
                        style={{
                            background: ACCENT,
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: 700,
                            padding: "4px 12px",
                            borderRadius: 20,
                            letterSpacing: "0.07em",
                            display: "inline-block",
                            marginBottom: 20,
                        }}
                    >
                        {type === "integrada" ? "RECOMENDAMOS" : "SOLUCIÓN COMPLETA"}
                    </span>

                    <h2
                        className="fw-700 text-white mb-3"
                        style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
                    >
                        {type === "integrada" ? "App Integrada" : "App a Medida"}
                    </h2>

                    <p className="mb-4" style={{ color: TEXT_MID, fontSize: 17, lineHeight: 1.6 }}>
                        {type === "integrada"
                            ? "La solución perfecta para tu operación. Todos tus módulos en una sola plataforma — web, móvil y escritorio desde el primer día."
                            : "Con 3 o más módulos, construimos una arquitectura diseñada específicamente para tu operación."}
                    </p>

                    {/* Price */}
                    <div style={{ marginBottom: 28 }}>
                        {type === "integrada" ? (
                            <>
                                <div style={{ color: TEXT_DIM, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4 }}>
                                    Tu inversión
                                </div>
                                <div style={{ color: "#fff", fontSize: 38, fontWeight: 700, lineHeight: 1 }}>
                                    {fmt(price)}
                                </div>
                                <div style={{ color: TEXT_DIM, fontSize: 13, marginTop: 4 }}>
                                    IVA incluido · Entrega estimada: 3-4 semanas
                                </div>
                            </>
                        ) : (
                            <>
                                <div style={{ color: "#fff", fontSize: 24, fontWeight: 700 }}>
                                    Desde $35,000 MXN
                                </div>
                                <div style={{ color: TEXT_DIM, fontSize: 13, marginTop: 4 }}>
                                    Cotización personalizada
                                </div>
                            </>
                        )}
                    </div>

                    {/* Modules list */}
                    <div style={{ marginBottom: 28 }}>
                        <div style={{ color: TEXT_DIM, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>
                            Módulos incluidos
                        </div>
                        <ul className="list-unstyled m-0">
                            {selectedData.map((d) => (
                                <li key={d.id} className="d-flex align-items-center gap-2 mb-2">
                                    <span style={{ color: ACCENT, fontSize: 15, flexShrink: 0 }}>✓</span>
                                    <span style={{ color: "#fff", fontSize: 14 }}>
                                        {d.icon} {d.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Acompañamiento add-on (integrada only) */}
                    {type === "integrada" && (
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={onToggleAcomp}
                            onKeyDown={(e) => e.key === "Enter" && onToggleAcomp()}
                            style={{
                                background: CARD_BG,
                                border: includeAcomp ? BORDER_ACTIVE : BORDER,
                                borderRadius: 10,
                                padding: "16px 18px",
                                marginBottom: 32,
                                cursor: "pointer",
                                transition: "border 0.2s",
                            }}
                        >
                            <div className="d-flex align-items-start justify-content-between gap-3">
                                <div>
                                    <div style={{ color: TEXT_DIM, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 5 }}>
                                        Add-on opcional
                                    </div>
                                    <div style={{ color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 3 }}>
                                        ¿Quieres que el sistema evolucione contigo?
                                    </div>
                                    <div style={{ color: TEXT_MID, fontSize: 13 }}>
                                        Agrega Acompañamiento Mensual desde $6,000 MXN/mes
                                    </div>
                                </div>
                                {/* Toggle pill */}
                                <div
                                    style={{
                                        width: 44,
                                        height: 24,
                                        borderRadius: 12,
                                        background: includeAcomp ? ACCENT : "rgba(255,255,255,0.15)",
                                        position: "relative",
                                        flexShrink: 0,
                                        transition: "background 0.2s",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 18,
                                            height: 18,
                                            borderRadius: "50%",
                                            background: "#fff",
                                            position: "absolute",
                                            top: 3,
                                            left: includeAcomp ? 23 : 3,
                                            transition: "left 0.2s",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* CTAs */}
                    <div className="d-flex flex-column gap-3" style={{ maxWidth: 420 }}>
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: ACCENT,
                                color: "#fff",
                                borderRadius: 8,
                                padding: "16px 28px",
                                fontSize: 15,
                                fontWeight: 700,
                                textDecoration: "none",
                                display: "block",
                                textAlign: "center",
                            }}
                        >
                            {type === "integrada"
                                ? "Iniciar conversación por WhatsApp"
                                : "Solicitar propuesta personalizada"}
                        </a>
                        <Link
                            to="/consulta"
                            style={{
                                color: TEXT_MID,
                                fontSize: 14,
                                textDecoration: "underline",
                                textAlign: "center",
                            }}
                        >
                            {type === "integrada" ? "Prefiero hablar primero" : "Agendar llamada"}
                        </Link>
                    </div>
                </div>

                {/* Right: summary card */}
                <div className="col-lg-5">
                    <div
                        style={{
                            background: "#111",
                            border: BORDER,
                            borderRadius: 12,
                            padding: "24px",
                            position: "sticky",
                            top: 24,
                        }}
                    >
                        <div style={{ color: TEXT_DIM, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 16 }}>
                            Resumen de tu propuesta
                        </div>
                        <div style={{ color: "#fff", fontWeight: 700, fontSize: 17, marginBottom: 14 }}>
                            {type === "integrada" ? "App Integrada" : "App a Medida"}
                        </div>
                        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14, marginBottom: 14 }}>
                            {selectedData.map((d, idx) => (
                                <div key={d.id} className="d-flex justify-content-between mb-2">
                                    <span style={{ color: TEXT_MID, fontSize: 13 }}>
                                        {d.icon} {d.name}
                                    </span>
                                    <span style={{ color: TEXT_DIM, fontSize: 13 }}>
                                        {idx === 0 ? "Incluido" : `+${fmt(DOMO_PRICES[d.id] ?? 10000)}`}
                                    </span>
                                </div>
                            ))}
                            {includeAcomp && type === "integrada" && (
                                <div className="d-flex justify-content-between mb-2">
                                    <span style={{ color: TEXT_MID, fontSize: 13 }}>Acompañamiento</span>
                                    <span style={{ color: TEXT_DIM, fontSize: 13 }}>+$6,000/mes</span>
                                </div>
                            )}
                        </div>
                        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14 }}>
                            <div className="d-flex justify-content-between align-items-end">
                                <span style={{ color: TEXT_DIM, fontSize: 13 }}>
                                    {type === "integrada" ? "Total estimado" : "Desde"}
                                </span>
                                <span style={{ color: "#fff", fontWeight: 700, fontSize: 22 }}>
                                    {type === "integrada" ? fmt(price) : "$35,000 MXN"}
                                </span>
                            </div>
                            {type === "integrada" && (
                                <div style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, textAlign: "right", marginTop: 2 }}>
                                    IVA incluido
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CotizadorSection() {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [industry, setIndustry] = useState("");
    const [selectedDomos, setSelectedDomos] = useState<string[]>([]);
    const [includeAcomp, setIncludeAcomp] = useState(false);

    const goBack = () => {
        if (step === 2) setStep(1);
        if (step === 3) setStep(2);
    };

    const toggleDomo = (id: string) =>
        setSelectedDomos((prev) =>
            prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
        );

    const reset = () => {
        setStep(1);
        setIndustry("");
        setSelectedDomos([]);
        setIncludeAcomp(false);
    };

    return (
        <section
            className="changeless"
            style={{ background: "#0c0c0c", minHeight: "100vh" }}
        >
            <div className="container" style={{ paddingTop: 120, paddingBottom: 100 }}>
                <div style={{ maxWidth: "75%", margin: "0 auto", width: "100%" }}>
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <span style={{
                        fontSize: "0.75rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: ACCENT,
                        display: "block",
                        marginBottom: "0.75rem",
                    }}>
                        Encuentra tu solución
                    </span>
                    <h2 style={{
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        margin: 0,
                        color: "#fff",
                    }}>
                        Cotizador Inteligente
                    </h2>
                    <p style={{
                        marginTop: "0.75rem",
                        opacity: 0.6,
                        fontSize: "1rem",
                        fontWeight: 300,
                        color: "#fff",
                        marginBottom: 0,
                    }}>
                        Selecciona tu industria y los módulos que necesita tu operación.
                    </p>
                </div>
                <ProgressBar step={step} />

                {step === 1 && (
                    <StepIndustria
                        onSelect={(id) => {
                            setIndustry(id);
                            setStep(2);
                        }}
                    />
                )}

                {step === 2 && (
                    <StepDomos
                        industry={industry}
                        selected={selectedDomos}
                        onToggle={toggleDomo}
                        onBack={goBack}
                        onNext={() => setStep(3)}
                    />
                )}

                {step === 3 && (
                    <StepResultado
                        selectedDomos={selectedDomos}
                        industry={industry}
                        includeAcomp={includeAcomp}
                        onToggleAcomp={() => setIncludeAcomp((v) => !v)}
                        onBack={goBack}
                        onReset={reset}
                    />
                )}
                </div>
            </div>
        </section>
    );
}
