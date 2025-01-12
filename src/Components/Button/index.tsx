import { IButton } from "@/Interface/Components/IButton";
import Link from "next/link";

export default function Button(props: IButton) {
    return (
        <div className="relative">
            {props.infoButton && (
                <div className="
                py-2 px-2 text-sm/[8px] rounded font-semibold
                flex md:items-center md:justify-center absolute -top-4 -left-4 -rotate-[25deg]
                border-solid border-2 border-white">
                    <span className="text-white">beta</span>
                </div>
            )}

            <Link
                href={props.href}
                rel="noopener noreferrer"
                target={props.target}
                className="block py-6 mb-12 text-center text-base font-bold text-white bg-[#D82818] rounded-[12px] hover:bg-[#9A190D]
            shadow-[6px_8px_0_rgba(0,0,0,1)] p-6"
            >
                {props.text}
            </Link>
        </div>
    );
}