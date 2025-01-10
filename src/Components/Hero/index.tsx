import { IHero } from "@/Interface/Components/IHero";

export default function Hero(props: IHero) {
    return (
        <div className="text-center">
            <h1 className="text-[32px] lg:text-[52px] xl:text-[72px] text-white font-bold  mb-2 md:mb-6">
                {props.title}
            </h1>
            <h2 className="text-[14px] lg:text-[18px] xl:text-[20px] font-extralight text-gray-300 mb-2 md:mb-6">
                {props.description}
            </h2>

            <p className="text-[14px] text-lg text-white mb-6">
                {props.info}
            </p>
        </div>
    );
}