import Card from "@/Components/Card";
import { bandMembers } from "@/Mock/bandMambers";

export default function BandMambersScreen() {

  return (
    <div className="container flex justify-center items-center min-h-screen mx-auto w-full p-4 text-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-12">Integrantes da Banda</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {bandMembers.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              alt={member.name}
              image={member.image}
              description={member.description}
              role={member.role}
            />
          ))}
        </section>
      </div>
    </div>
  );
}