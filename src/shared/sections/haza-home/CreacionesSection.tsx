import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

/* Creaciones — adapted from Home10 Section3 portfolio grid */
const CREACIONES = [
    {
        id: "I",
        href: "https://demos.hazamunguia.com/sanctum",
        external: true,
        /* TODO: replace with SANCTUM atmospheric visual */
        img: "/assets/imgs/pages/home-10/sec-3-project-1.webp",
        size: "sm" as const,
        name: "SANCTUM",
        tags: ["Sistema de reservas", "Gestión de membresías", "Club privado"],
        delay: "0.10",
    },
    {
        id: "II",
        href: "https://demos.hazamunguia.com/oraculo",
        external: true,
        img: "/assets/imgs/pages/home-10/sec-3-project-2.webp",
        size: "lg" as const,
        name: "ORÁCULO",
        tags: ["Diagnóstico inteligente", "Cotización en tiempo real", "Exploración autónoma"],
        delay: "0.12",
    },
];

export default function CreacionesSection() {
    return (
        <section className="sec-3-home-10 hm-creaciones" aria-label="Creaciones">
            <div className="sec-3-home-10__container">

                {/* Header */}
                <div className="d-flex align-items-end justify-content-between mb-5 sec-3-home-10__header">
                    <div>
                        <Link className="d-inline-flex align-items-center gap-2 text-decoration-none at_fade_anim" to="/creaciones" data-delay="0.05">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Creaciones</span>
                                    <span className="text-2">Creaciones</span>
                                </span>
                                <i>{ARROW_SVG}{ARROW_SVG}</i>
                            </span>
                        </Link>
                        <h2 className="mt-2 mb-0 at_fade_anim reveal-text" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.95 }} data-delay="0.08">
                            <RevealText>Obras funcionales. Contextos imaginarios.</RevealText>
                        </h2>
                    </div>
                    <Link className="sec-5-home-10__cta d-none d-lg-inline-flex align-items-center gap-3 at_fade_anim" to="/creaciones" data-delay="0.1">
                        <span>Ver todas</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                            <path d="M1 12L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                {/* Grid */}
                <div className="sec-3-home-10__grid">
                    {CREACIONES.map((c) => (
                        <article
                            key={c.id}
                            className={`sec-3-home-10__project sec-3-home-10__project--${c.size} at_fade_anim`}
                            data-delay={c.delay}
                            aria-label={c.name}
                        >
                            <Link
                                className="sec-3-home-10__project-link text-decoration-none d-block"
                                to={c.href}
                                {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
                            >
                                <div className="sec-3-home-10__project-img overflow-hidden">
                                    {/* TODO: replace with actual Sanctum / Oráculo atmospheric visuals */}
                                    <img
                                        src={c.img}
                                        alt={c.name}
                                        loading="lazy"
                                        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }}
                                    />
                                </div>
                                <div className="sec-3-home-10__project-info d-flex align-items-end justify-content-between mt-3">
                                    <div>
                                        <span className="d-block mb-1" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", opacity: 0.5 }}>
                                            {c.id} — 2025
                                        </span>
                                        <h3 className="sec-3-home-10__project-name">{c.name}</h3>
                                        <ul className="d-flex flex-wrap gap-2 list-unstyled mt-1">
                                            {c.tags.map((t) => (
                                                <li key={t} className="sec-3-home-10__project-tag">{t}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <span className="sec-3-home-10__project-fab flex-shrink-0" aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                            <path d="M1 14L14 1M14 1H4M14 1V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
