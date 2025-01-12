import Card from "@/Components/Card";
import { bandMembers } from "@/Mock/bandMambers";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function BandMambersScreen() {
  return (
    <div className="container flex justify-center items-center min-h-screen mx-auto w-full p-4 text-center">
      <Link href="/" className="absolute top-6 left-4 z-10 rounded transition-transform duration-300 hover:-translate-x-1">
        <FaArrowLeft fontSize={20} color={"#FFF"} />
      </Link>

      <div className="text-center">
        <h1 className="text-white text-2xl font-bold mb-12 mt-4">
          Integrantes da Banda
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {bandMembers.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              alt={member.name}
              image={member.image}
              description={member.description}
              role={member.role}
              href={member.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
