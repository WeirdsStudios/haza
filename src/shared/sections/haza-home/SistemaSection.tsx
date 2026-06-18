import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

/* Sistema section — adapted from Home10 Section4 service layout */
const PRODUCTS = [
    {
        id: "01",
        href: "/sistema",
        /* TODO: replace with actual product visual */
        img: "/assets/imgs/pages/home-10/sec-4-service-1.webp",
        width: 800, height: 520,
        name: "App Integrada",
        excerpt: "Un sistema construido desde módulos funcionales que combinan para digitalizar la operación completa de tu empresa. Una sola obra — web, móvil y escritorio.",
        layout: "image-first" as const,
        delay: "0.10",
    },
    {
        id: "02",
        href: "/sistema",
        img: "/assets/imgs/pages/home-10/sec-4-service-2.webp",
        width: 720, height: 460,
        name: "App a Medida",
        excerpt: "Para operaciones que requieren un objeto digital construido sin compromisos con lo genérico. Diseñado exclusivamente para la arquitectura de tu negocio.",
        layout: "bar-first" as const,
        delay: "0.12",
    },
];

export default function SistemaSection() {
    return (
        <section className="sec-4-home-10 hm-sistema" aria-label="El Sistema">
            <div className="sec-4-home-10__container">

                {/* Section header */}
                <div className="row align-items-end align-items-xl-center justify-content-between mb-5">
                    <div className="col-xl-9 col-lg-10">
                        <Link className="d-inline-flex align-items-center gap-2 text-decoration-none at_fade_anim" to="/sistema" data-delay="0.05">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">El Sistema</span>
                                    <span className="text-2">El Sistema</span>
                                </span>
                                <i>{ARROW_SVG}{ARROW_SVG}</i>
                            </span>
                        </Link>
                        <h2 className="mt-2 mb-0 at_fade_anim reveal-text" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.95 }} data-delay="0.08">
                            <RevealText>Un sistema. Cualquier pantalla.</RevealText>
                        </h2>
                    </div>
                    <div className="col-xl-auto mt-3 mt-xl-0">
                        <Link className="sec-5-home-10__cta d-inline-flex align-items-center gap-3 at_fade_anim" to="/sistema" data-delay="0.12">
                            <span>Ver el sistema completo</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                                <path d="M1 12L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Product list */}
                {PRODUCTS.map((product) => (
                    <article key={product.id} className={`sec-4-home-10__service-item sec-4-home-10__service-item--${product.layout} at_fade_anim`} data-delay={product.delay} aria-label={product.name}>
                        {product.layout === "image-first" && (
                            <div className="sec-4-home-10__service-img">
                                {/* TODO: replace with product visual — currently using placeholder */}
                                <img src={product.img} alt={product.name} width={product.width} height={product.height} loading="lazy" style={{ opacity: 0.5 }} />
                            </div>
                        )}
                        <div className="sec-4-home-10__service-bar">
                            <div className="sec-4-home-10__service-num">{product.id}</div>
                        </div>
                        <div className="sec-4-home-10__service-body">
                            <Link className="sec-4-home-10__service-name text-decoration-none" to={product.href}>
                                {product.name}
                            </Link>
                            <p className="sec-4-home-10__service-excerpt">{product.excerpt}</p>
                            <Link className="sec-4-home-10__service-link d-inline-flex align-items-center gap-2" to={product.href}>
                                <span>Consultar disponibilidad</span>
                                {ARROW_SVG}
                            </Link>
                        </div>
                        {product.layout === "bar-first" && (
                            <div className="sec-4-home-10__service-img">
                                <img src={product.img} alt={product.name} width={product.width} height={product.height} loading="lazy" style={{ opacity: 0.5 }} />
                            </div>
                        )}
                    </article>
                ))}

            </div>
        </section>
    );
}
