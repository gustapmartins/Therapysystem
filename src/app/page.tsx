import Button from "src/Components/Button";
import Footer from "../Components/Footer";
import Hero from "src/Components/Hero";
import Photo from "src/Components/Photo";
import { buttonsMock } from "src/Mock/buttonsMock";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-16">
      {/* Círculo da Imagem no Topo */}
      <Photo />

      {/* Título e Descrição */}
      <Hero
        key={1}
        title="Therapysystem"
        description="Descubra mais sobre a banda e acompanhe suas novidades!"
        info="↓ Vem comigo ↓"
      />

      {/* Links */}
      <div className="w-full max-w-3xl px-6 ">
        {buttonsMock.map((x, index) => (
          <Button
            key={index}
            target={x.target}
            text={x.text}
            href={x.href}
            infoButton={x.infoButton}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
