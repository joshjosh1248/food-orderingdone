import Header from "./components/layout/Header";
import Info from "./components/Info";
import HomeMenu from "./components/layout/HomeMenu";
import Link from "next/link";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
   
    <Info/> 
    <HomeMenu/>
    <section className="text-center my-16" id="about">
      <SectionHeaders 
      subHeader={'Our Story'}
      mainHeader={'About us'}  />
<div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
      <p>
        Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food 
        </p>

        <p>
        Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food 
        </p>

        <p>
        Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food Food 

        </p>

</div>
    </section>

    <section className="text-center my-8" id="contact">

    <SectionHeaders 
      subHeader={'Heyyyyyyyyy'}
      mainHeader={'Contact us'}  />
   <div className="mt-8">
      <a className="text-4xl underline text-gray-500" href="tel:9074657342">
         9074657342
      </a>
      </div>
    </section>

    

    
      </>   // Header section defined in Header.js
  )         //Info section defined in Info.js
}