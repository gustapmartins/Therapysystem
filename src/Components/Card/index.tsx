import { ICard } from "src/Interface/Components/ICard";
import Link from "next/link";
import Image from "next/image";
import { GrInstagram } from "react-icons/gr";

export default function Card(props: ICard) {
    return (
        <div className="py-8 flex flex-col items-center justify-center bg-[#131921] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 rounded-full overflow-hidden m-2">
                <Image src={props.image} width={240} height={240} alt={props.name} className="object-cover"/>
            </div>
            <div className="px-6">
                <h2 className="text-2xl text-[#D6DAE4] font-semibold">{props.name}</h2>
                <p className="text-lg font-medium mt-2 mb-2 text-[#D6DAE4] ">{props.role}</p>
                <p className="text-[#D6DAE4] text-xs mt-2">{props.description}</p>

                <Link href={props.href} className="bg-blue-500 hover:bg-blue-700 mt-4 py-2 px-4 
                rounded flex justify-center items-center
                shadow-[4px_4px_0_rgba(48,48,48,1)]">
                    <GrInstagram color="white" />
                    <button  className="text-white font-bold pl-2">
                        Instagram
                    </button>
                </Link>
            </div>
        </div>
    )
}