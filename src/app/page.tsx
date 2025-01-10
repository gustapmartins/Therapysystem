import Button from "@/Components/Button";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import { buttonsMock } from "@/Mock/buttonsMock";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      {/* Círculo da Imagem no Topo */}
      <div className="mb-12">
        <div className="w-60 h-60 rounded-full overflow-hidden shadow-[4px_6px_2px_2px_rgba(48,48,48,1)]">
          <Image
            src="/Assets/Logo.jpg"
            alt="Avatar"
            width={240}
            height={240}
            className="object-cover"
          />
        </div>
      </div>

      {/* Título e Descrição */}
      <Hero 
        key={1}
        title="Therapysystem"
        description="Descubra mais sobre a banda e acompanhe suas novidades!"
        info="↓ Vem comigo ↓"
      />

      {/* Links */}
      <div className="w-full max-w-3xl px-4">

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
    </main>
  );
}
