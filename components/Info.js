import Image from "next/image"
import Right from "./icons/Right"
export default function Info() {
return (
    
    <section className="info mt-4">
        <div className="py-12">
        <h1 className="text-4xl font-semibold">
             Everything<br />
             is better<br />
              when you are&nbsp;
             <span className="text-primary">
                full
             </span>
        </h1>

        <p className="my-6 text-gray-500 text-sm">
            Eat fully eat healthy,
            Eat lively eat deadly,
            Eat everything eat anything
        </p>
        <div className="flex gap-4 text-sm">
        <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right/>
        </button>
        <button className="flex border-0 items-center gap-2 py-2 text-gray-600">
            Learn more
            <Right/>
        </button>
        </div>
        </div>
        <div className="relative">
        <Image src={'/Lemonjuice.jpg'} layout={'fill'}
        objectft={'contain'}  alt={'Lime'} />
        </div>
    </section>
)
}
