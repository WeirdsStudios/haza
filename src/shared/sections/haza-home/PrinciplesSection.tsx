import Marquee from "react-fast-marquee";

const PRINCIPLES = [
    { text: "Dignidad antes que validación", sym: "◆" },
    { text: "Silencio antes que ruido", sym: "◆" },
    { text: "Forma antes que tendencia", sym: "◆" },
    { text: "Coherencia antes que volumen", sym: "◆" },
    { text: "Obra antes que discurso", sym: "◆" },
];

const ALL = [...PRINCIPLES, ...PRINCIPLES, ...PRINCIPLES];

export default function PrinciplesSection() {
    return (
        <section className="at-brand-area hm-principles at_fade_anim" aria-label="Principios">
            <div className="carouselTicker carouselTicker-right position-relative z-1">
                <Marquee speed={36} direction="right" pauseOnHover gradient={false} className="carouselTicker__marquee">
                    <ul className="carouselTicker__list" style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, overflow: "visible", gap: "0 2.5rem" }}>
                        {ALL.map((p, i) => (
                            <li key={i} className="carouselTicker__item" style={{ margin: "0 1.5rem", float: "none" }}>
                                <span style={{ display: "flex", alignItems: "center", gap: "0.75rem", whiteSpace: "nowrap", opacity: 0.55, fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                                    <span style={{ color: "var(--at-theme-primary)", opacity: 0.4, fontSize: "0.5rem" }}>{p.sym}</span>
                                    {p.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
