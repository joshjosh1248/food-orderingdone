'use client';
import Image from "next/image"
import MenuItem from "../menu/MenuItem"
import SectionHeaders from "./SectionHeaders"
import { useEffect, useState } from "react";

export default function HomeMenu() {
const[bestSellers,setBestSellers]= useState([]);

        useEffect(() => {
                fetch('/api/menu-items').then(res => {
                    res.json().then(menuItems => {
                        setBestSellers(menuItems.slice(-3));
                    });
                });
        }, []);

    return(
        <section className="">
           
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute left-0 -top-20 text-left -z-10">
                    <Image src={'/BiriyaniLeft.jpg'} width={209}  height={289}
                     alt={'Biriyanileft'} />
                </div>

                <div className="absolute -top-36 -right-0 -z-10">
                    <Image src={'/BiriyaniRight.jpg'} width={209} height={289}
                     alt={'Biriyaniright'} />
                </div>
            </div>
              
        <div className="text-center mb-4">

            <SectionHeaders 
               subHeader={'check out'}
               mainHeader={'Our Best Sellers'}      
            />      
             </div>
        <div className="grid grid-cols-3 gap-4">
      
       {bestSellers?.length >0 && bestSellers.map(item => (
        <MenuItem {...item} />
       ))}

        </div>
        </section>
    )
}