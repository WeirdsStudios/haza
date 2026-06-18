import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

export default function DeclarationSection() {
    return (
        <section className="sec-5-home-10 hm-declaration" aria-label="Declaración">
            <div className="sec-5-home-10__container">
                <div className="row align-items-end align-items-xl-center justify-content-between sec-5-home-10__intro-row">
                    <div className="col-xl-10 col-lg-11">
                        <Link className="sec-5-home-10__eyebrow d-inline-flex align-items-center gap-2 text-decoration-none at_fade_anim" to="/sistema" data-delay="0.05">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Haza Munguia</span>
                                    <span className="text-2">Haza Munguia</span>
                                </span>
                                <i>{ARROW_SVG}{ARROW_SVG}</i>
                            </span>
                        </Link>
                        <h2 className="sec-5-home-10__title mt-3 mb-0 at_fade_anim reveal-text" data-delay="0.1">
                            <RevealText>
                                Los sistemas digitales deben ser, antes que cualquier cosa, obras. No soluciones genéricas. No versiones de algo existente. Objetos creados con la misma precisión que distingue a una pieza de manufactura excepcional.
                            </RevealText>
                        </h2>
                    </div>
                    <div className="col-xl-auto col-lg-10">
                        <Link className="sec-5-home-10__cta d-inline-flex align-items-center gap-3 at_fade_anim" to="/consulta" data-delay="0.15">
                            <span>Conversemos</span>
                            <svg className="sec-5-home-10__cta-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                                <path d="M1 12L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
