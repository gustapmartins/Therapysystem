import Image from "next/image";

export default function Photo() {
  return (
    <div className="p-8">
      <div className="w-[180px] h-[180px] sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-[4px_6px_2px_2px_rgba(48,48,48,1)]">
        <Image
          src="/Assets/Logo.jpg"
          alt="Avatar"
          width={240}
          height={240}
          className="object-cover"
        />
      </div>
    </div>
  );
}
