import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

export default function AxiomaSection() {
    return (
        <section className="sec-6-home-10 hm-axioma" aria-label="Axioma / CTA">
            <div className="sec-6-home-10__container">
                <div className="sec-6-home-10__layout">

                    <header className="sec-6-home-10__title-block">
                        <div className="sec-6-home-10__eyebrow d-inline-flex align-items-center gap-2 at_fade_anim" data-delay="0.05">
                            <span style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.5 }}>
                                Perfil de cliente
                            </span>
                        </div>
                        <h2 className="sec-6-home-10__title mt-3 mb-0 at_fade_anim reveal-text" data-delay="0.08">
                            <RevealText>
                                Trabajamos con quienes ya tienen historia y están listos para que un sistema lo cambie todo.
                            </RevealText>
                        </h2>
                    </header>

                    {/* Critera items replacing "team members" */}
                    {[
                        { num: "01", text: "Ya vende y quiere mejorar.", desc: "Tiene operación real con flujo probado." },
                        { num: "02", text: "Ya tiene marca y necesita sistema.", desc: "La identidad existe. Falta la infraestructura digital." },
                        { num: "03", text: "Tiene operación que puede digitalizarse.", desc: "Procesos manuales listos para convertirse en sistema." },
                        { num: "04", text: "Entiende el valor del diseño.", desc: "No pregunta el precio antes de entender el alcance." },
                    ].map((item, i) => (
                        <article
                            key={item.num}
                            className="sec-6-home-10__member at_fade_anim"
                            data-delay={String(0.1 + i * 0.02)}
                            style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", padding: "1.5rem 0", borderTop: "1px solid rgba(240,239,235,0.06)" }}
                        >
                            <span style={{ fontSize: "0.7rem", letterSpacing: "0.2em", opacity: 0.4, paddingTop: "0.2rem", minWidth: "2.5rem" }}>{item.num}</span>
                            <div>
                                <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>{item.text}</h3>
                                <p style={{ fontSize: "0.85rem", opacity: 0.5, fontWeight: 300 }}>{item.desc}</p>
                            </div>
                        </article>
                    ))}

                    {/* CTA */}
                    <div className="mt-5 at_fade_anim" data-delay="0.18">
                        <Link
                            className="at-btn rounded-0"
                            to="/consulta"
                            style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2rem", border: "1px solid rgba(240,239,235,0.15)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 400 }}
                        >
                            <span>
                                <span className="text-1">Conversemos</span>
                                <span className="text-2">Conversemos</span>
                            </span>
                            <i>
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 12L13 1M13 1H2M13 1V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </i>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
