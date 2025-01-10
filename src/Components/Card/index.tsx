import { ICard } from "@/Interface/Components/ICard";
import { GrInstagram } from "react-icons/gr";

export default function Card(props: ICard) {
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 rounded-full overflow-hidden m-2">
                <img src={props.image} alt={props.name} className="object-cover"/>
            </div>
            <div className="py-4 px-6">
                <h2 className="text-2xl text-gray-500 font-semibold">{props.name}</h2>
                <p className="text-lg font-medium mt-2 text-gray-600">{props.role}</p>
                <p className="text-gray-500 text-sm/[14px] mt-2">{props.description}</p>

                <div className="bg-blue-500 hover:bg-blue-700 mt-4 py-2 px-4 
                rounded flex justify-center items-center
                shadow-[4px_4px_0_rgba(48,48,48,1)]">
                    <GrInstagram />
                    <button className="text-white font-bold pl-2">
                        Instagram
                    </button>
                </div>
            </div>
        </div>
    )
}