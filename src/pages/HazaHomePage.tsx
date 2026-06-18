import PageMeta from "@/seo/PageMeta";
import CursorTrailEffect from "@/shared/effects/CursorTrailEffect";
import HeroSection from "@/shared/sections/haza-home/HeroSection";
import DeclarationSection from "@/shared/sections/haza-home/DeclarationSection";
import PrinciplesSection from "@/shared/sections/haza-home/PrinciplesSection";
import SistemaSection from "@/shared/sections/haza-home/SistemaSection";
import CreacionesSection from "@/shared/sections/haza-home/CreacionesSection";
import AxiomaSection from "@/shared/sections/haza-home/AxiomaSection";
import Home10Sec4PinEffect from "@/shared/effects/Home10Sec4PinEffect";
import Home10Sec5PinEffect from "@/shared/effects/Home10Sec5PinEffect";
import Home10Sec6PinEffect from "@/shared/effects/Home10Sec6PinEffect";

export default function HazaHomePage() {
  return (
    <>
      <PageMeta
        title="Haza Munguia — Ingeniería que firma lo que toca"
        description="Un estudio de ingeniería y diseño. Objetos digitales que elevan el estándar de lo que tocan."
      />
      <CursorTrailEffect />
      <HeroSection />
      <DeclarationSection />
      <PrinciplesSection />
      <Home10Sec4PinEffect>
        <SistemaSection />
      </Home10Sec4PinEffect>
      <Home10Sec5PinEffect>
        <CreacionesSection />
      </Home10Sec5PinEffect>
      <Home10Sec6PinEffect>
        <AxiomaSection />
      </Home10Sec6PinEffect>
    </>
  );
}
