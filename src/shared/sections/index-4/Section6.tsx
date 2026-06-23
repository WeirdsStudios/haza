import TeamCard2 from "@/shared/cards/TeamCard2";
import OdometerCounter from "@/shared/elements/OdometerCounter";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const TEAM_MEMBERS = [
    {
        classList: "col-lg-8 col-12 mx-auto",
        link: "/",
        img: "/assets/imgs/hm/haza1.webp",
        name: "Haza Munguia",
        delay: ".2",
        position: "Design Engineer · Fundador",
        bio: "Más de 10 años construyendo productos digitales donde el diseño y la ingeniería no se separan. Dirijo cada proyecto con visión estratégica, apoyado en los mejores colaboradores y herramientas disponibles — orientado a un solo resultado: que tu negocio funcione mejor.",
        skills: ["UX Design", "Flutter", "Next.js", "Estrategia", "CDMX"],
    },
];

export default function Section6() {
    return (
        <section className="sec-6-home-4 pt-120 pb-120 bg-neutral-50">
            <div className="container">
                <div className="row pb-60">
                    <div className="col-xxl-1 col-lg-2 col-md-3">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Quién está detrás</span>
                                <span className="text-2">Quién está detrás</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <h3 className="reveal-text">
                            Dirijo cada proyecto con visión estratégica, apoyado en los mejores colaboradores y herramientas disponibles.
                        </h3>
                    </div>
                    <div className="col-lg-3 col-md-5 ms-auto text-center">
                        <h1 className="fz-ds-1 fw-500 mb-0 lh-1">
                            <OdometerCounter count={10} suffix="+" />
                        </h1>
                        <h6 className="fw-500 mb-0">
                            Años en diseño <br /> e ingeniería
                        </h6>
                    </div>
                </div>
                <div className="row g-4">
                    {TEAM_MEMBERS.map((member) => (
                        <TeamCard2
                            key={member.img}
                            classList={member.classList}
                            link={member.link}
                            img={member.img}
                            name={member.name}
                            delay={member.delay}
                            position={member.position}
                            bio={member.bio}
                            skills={member.skills}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
