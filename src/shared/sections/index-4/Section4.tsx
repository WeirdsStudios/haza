import { Link } from "react-router-dom";
import PortfolioCard3 from "@/shared/cards/PortfolioCard3";
import OdometerCounter from "@/shared/elements/OdometerCounter";
import RevealText from "@/shared/effects/RevealText";

// Home 4 Section 4 - Case Studies + Award + Trusted by

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_CIRCLE = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const PLUS_ICON = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const DIAMOND_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.5 0H0L41.5 41.5H0L41.5 83H83L41.5 41.5H83L41.5 0Z"
            fill="currentColor"
        />
    </svg>
);

const FEATURED_TAGS = [
    "RESERVAS",
    "E-COMMERCE",
    "COTIZADOR",
    "RESTAURANTE",
    "CLÍNICA",
];

const DEMO_CARDS = [
    {
        title: "CotizaPro",
        badge: "SERVICIOS PROFESIONALES",
        desc: "Genera cotizaciones automáticas al instante. Para despachos, consultoras y empresas de servicios.",
        img: "/assets/imgs/pages/img-80.webp",
    },
    {
        title: "Reserva+",
        badge: "HOSPITALIDAD Y TURISMO",
        desc: "Reservas, disponibilidad y perfil de huésped en tiempo real. Para hoteles, experiencias y eventos.",
        img: "/assets/imgs/pages/img-81.webp",
    },
    {
        title: "VidaClínica",
        badge: "SALUD Y BIENESTAR",
        desc: "Agenda de citas, historial de pacientes y recordatorios automáticos. Para clínicas y spas.",
        img: "/assets/imgs/pages/img-82.webp",
    },
    {
        title: "La Carta",
        badge: "RESTAURANTES Y ALIMENTOS",
        desc: "Menú digital, pedidos en línea y panel de administración. Para restaurantes y dark kitchens.",
        img: "/assets/imgs/pages/img-83.webp",
    },
    {
        title: "Selecto",
        badge: "RETAIL Y E-COMMERCE",
        desc: "Tienda completa con carrito, pagos y gestión de inventario. Para tiendas físicas y en línea.",
        img: "/assets/imgs/pages/img-84.webp",
    },
];

const PORTFOLIO_CARDS = [
    {
        classList: "col-lg-6",
        link: "/sistema",
        img: "/assets/imgs/pages/img-87.webp",
        title: "Modular · Escalable a tu ritmo",
        metricPrefix: "",
        metricValue: "App Integrada",
        metricSuffix: "",
        metricLabel: "",
        tags: ["MÓDULOS", "ESCALABLE", "MULTIDOMO", "FLEXIBLE"],
        linkLabel: "VER DETALLE",
    },
    {
        classList: "col-lg-6",
        link: "/sistema",
        img: "/assets/imgs/pages/img-88.webp",
        title: "Exclusivo · Construido para tu operación",
        metricPrefix: "",
        metricValue: "App a Medida",
        metricSuffix: "",
        metricLabel: "",
        tags: ["CUSTOM", "EXCLUSIVO", "ARQUITECTURA PROPIA", "ÚNICO"],
        linkLabel: "VER DETALLE",
    },
];

const TECH_STACK = ["Flutter", "Firebase", "Figma", "MercadoPago", "Google Cloud", "Supabase"];

export default function Section4() {
    return (
        <div className="container-2200 bg-neutral-50 pt-30">
            <section className="sec-4-home-4 pt-100 pb-100 rounded-5 mx-lg-3 mx-2 fix p-relative bg-neutral-0 border-100">
                <div className="container">
                    <div className="row align-items-end g-4">
                        <div className="col-xxl-6 col-lg-6">
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Demos en vivo</span>
                                    <span className="text-2">Demos en vivo</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h3 className="reveal-text mb-0">
                                <RevealText>Explora sistemas reales funcionando en diferentes industrias.</RevealText>
                            </h3>
                        </div>
                        <div className="col-lg-3 ms-auto d-flex justify-content-lg-end">
                            <div
                                className="at-btn-group at-btn-group-transparent at_fade_anim"
                                data-delay=".5"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/creaciones">
                                    {ARROW_CIRCLE}
                                </Link>
                                <Link className="at-btn z-index-1" to="/creaciones">
                                    Ver todos los demos
                                </Link>
                                <Link className="at-btn-circle" to="/creaciones">
                                    {ARROW_CIRCLE}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pt-70">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="card_case__studies-list">
                                <div className="card_case__studies-card">
                                    <div className="card_case__studies-left">
                                        <span className="card_case__studies-featured-tag">DISPONIBLE AHORA</span>
                                        <h4 className="card_case__studies-title">
                                            <Link to="/creaciones">
                                                5 demos funcionales listos para explorar
                                            </Link>
                                        </h4>
                                        <p className="card_case__studies-desc">
                                            Reservas, tiendas, cotizadores, menús digitales y sistemas de citas — todos funcionando con datos reales. Cada demo muestra también la vista del dueño del negocio.
                                        </p>
                                        <div className="card_case__studies-metrics">
                                            <div className="card_case__studies-metric">
                                                <h4 className="card_case__studies-metric-value mb-0">
                                                    <OdometerCounter count={5} prefix="" suffix="" />
                                                </h4>
                                                <span className="card_case__studies-metric-label">
                                                    Demos disponibles
                                                </span>
                                            </div>
                                            <div className="card_case__studies-metric-divider" />
                                            <div className="card_case__studies-metric">
                                                <h4 className="card_case__studies-metric-value mb-0">
                                                    <OdometerCounter count={4} prefix="" suffix="" />
                                                </h4>
                                                <span className="card_case__studies-metric-label">
                                                    Módulos disponibles
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-between mt-auto pt-50">
                                            <div className="card_case__studies-tags">
                                                {FEATURED_TAGS.map((tag) => (
                                                    <Link key={tag} to="#" className="card_case__studies-tag">
                                                        {tag}
                                                    </Link>
                                                ))}
                                            </div>
                                            <Link to="/creaciones" className="card_case__studies-link text-white">
                                                <span className="text-white text-nowrap">EXPLORAR DEMOS</span>
                                                {PLUS_ICON}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card_case__studies-right">
                                        <div className="row g-3">
                                            {DEMO_CARDS.slice(0, 4).map((demo) => (
                                                <div key={demo.title} className="col-6">
                                                    <Link to="/creaciones" className="text-decoration-none d-block" style={{ borderRadius: 12, overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.2s' }}
                                                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                                                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                                    >
                                                        <img src={demo.img} alt={demo.title} style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block' }} loading="lazy" />
                                                        <div style={{ padding: '0.75rem' }}>
                                                            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--at-theme-primary)', display: 'block', marginBottom: 4 }}>{demo.badge}</span>
                                                            <h6 style={{ color: '#fff', fontSize: 13, fontWeight: 700, marginBottom: 4, lineHeight: 1.2 }}>{demo.title}</h6>
                                                            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11, lineHeight: 1.45, margin: 0 }}>{demo.desc}</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                            <div className="col-6 offset-3">
                                                <Link to="/creaciones" className="text-decoration-none d-block" style={{ borderRadius: 12, overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.2s' }}
                                                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                                                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                                >
                                                    <img src={DEMO_CARDS[4].img} alt={DEMO_CARDS[4].title} style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block' }} loading="lazy" />
                                                    <div style={{ padding: '0.75rem' }}>
                                                        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--at-theme-primary)', display: 'block', marginBottom: 4 }}>{DEMO_CARDS[4].badge}</span>
                                                        <h6 style={{ color: '#fff', fontSize: 13, fontWeight: 700, marginBottom: 4, lineHeight: 1.2 }}>{DEMO_CARDS[4].title}</h6>
                                                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11, lineHeight: 1.45, margin: 0 }}>{DEMO_CARDS[4].desc}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {PORTFOLIO_CARDS.map((card) => (
                            <PortfolioCard3
                                key={card.title}
                                classList={card.classList}
                                link={card.link}
                                img={card.img}
                                title={card.title}
                                metricPrefix={card.metricPrefix}
                                metricValue={card.metricValue}
                                metricSuffix={card.metricSuffix}
                                metricLabel={card.metricLabel}
                                tags={card.tags}
                                linkLabel={card.linkLabel}
                            />
                        ))}
                    </div>
                </div>

                <div className="container pt-120">
                    <div className="row g-5">
                        <div className="col-lg-6 col-12">
                            <div className="award-description d-flex gap-5 pe-lg-5">
                                <div className="icon">{DIAMOND_ICON}</div>
                                <div className="content">
                                    <h5 className="revert-text mb-0 reveal-text">
                                        <RevealText>
                                            Haza Munguia Studio construye sistemas digitales que transforman la operación de tu empresa. Pensamos como estrategas y ejecutamos con claridad, creatividad y rendimiento.
                                        </RevealText>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="neutral-500 fw-600 text-uppercase">CONSTRUIDO CON</span>
                            <div className="d-flex align-items-center flex-wrap gap-lg-5 gap-4 mb-30 pt-30">
                                {TECH_STACK.slice(0, 3).map((name) => (
                                    <span key={name} className="fw-700 text-uppercase" style={{ fontSize: 13, letterSpacing: '0.04em', opacity: 0.55 }}>
                                        {name}
                                    </span>
                                ))}
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-lg-5 gap-4">
                                {TECH_STACK.slice(3).map((name) => (
                                    <span key={name} className="fw-700 text-uppercase" style={{ fontSize: 13, letterSpacing: '0.04em', opacity: 0.55 }}>
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
