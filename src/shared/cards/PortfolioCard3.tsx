import { Link } from "react-router-dom";
import OdometerCounter from "@/shared/elements/OdometerCounter";

const PLUS_ICON = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export type PortfolioCard3Props = {
    classList?: string;
    category?: string;
    link: string;
    img: string;
    title: string;
    metricPrefix: string;
    metricValue: string;
    metricSuffix?: string;
    metricLabel: string;
    tags: string[];
    linkLabel?: string;
};

export default function PortfolioCard3({
    classList = "",
    category = "",
    link,
    img,
    title,
    metricPrefix,
    metricValue,
    metricSuffix = "%",
    metricLabel,
    tags,
    linkLabel = "VER DETALLE",
}: PortfolioCard3Props) {
    return (
        <div
            className={`card_case__studies-list card_case__studies card_case__studies-list--row ${classList}`.trim()}
            data-category={category || undefined}
        >
            <div className="card_case__studies-card card_case__studies-card--overlay">
                <div className="card_case__studies-visual">
                    <Link to={link}>
                        <img
                            src={img}
                            alt={title}
                            width={600}
                            height={400}
                            className="w-100 h-100 img-cover" loading="lazy" />
                    </Link>
                    <div className="card_case__studies-metric-overlay">
                        <h4 className="card_case__studies-metric-value mb-0">
                            {Number.isNaN(Number(metricValue)) ? (
                                <span>{metricPrefix}{metricValue}</span>
                            ) : (
                                <OdometerCounter
                                    count={Number(metricValue)}
                                    prefix={metricPrefix}
                                    suffix={metricSuffix}
                                />
                            )}
                        </h4>
                        {metricLabel && <span className="card_case__studies-metric-label">{metricLabel}</span>}
                    </div>
                    <div className="card_case__studies-tags-overlay">
                        {tags.map((tag) => (
                            <Link key={tag} to="#" className="card_case__studies-tag">
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="card_case__studies-footer mt-10">
                    <h5 className="card_case__studies-footer-title">
                        <Link to={link}>{title}</Link>
                    </h5>
                    <Link to={link} className="card_case__studies-link text-white">
                        <span className="text-white text-nowrap">{linkLabel}</span>
                        {PLUS_ICON}
                    </Link>
                </div>
            </div>
        </div>
    );
}
