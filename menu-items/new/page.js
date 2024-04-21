'use client';
import UserTabs from "../../components/layout/UserTabs";
import EditableImage from "../../components/layout/EditableImage";
import {useEffect, useState} from "react";
import {useProfile} from "../../components/UseProfile";
import Link from "next/link";
import toast from "react-hot-toast";
import {redirect} from "next/navigation";
import MenuItemForm from "../../components/layout/MenuItemForm";





export default function NewMenuItemPage() {

   
    const[redirectToItems,setRedirectToItems]=useState(false);
    const{loading, data} =useProfile();


    async function handleFormSubmit(ev , data){
        ev.preventDefault();
      
        const savingPromise = new Promise(async(resolve,reject) =>{
     const response= await fetch('/api/menu-items',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok)
        resolve();
    else
        reject();
    });

    await toast.promise(savingPromise,{
        loading: 'Saving this tasty meal',
        success: 'Saved',
        error: 'Error',

    });

    setRedirectToItems(true);
    }
    
    if(redirectToItems){
        return redirect('/menu-items');
    }

    if (loading){
        return 'Loading User info....';
    }
    if (!data.admin) {
        return 'Not an admin....'
    }

    return(
        <section className="mt-8">
        <UserTabs isAdmin={true} />
        <div className="max-w-2xl mx-auto mt-8">
            <Link href={'/menu-items'} className="button">
            <span>Show all menu items</span>
            </Link>
            </div>
        <MenuItemForm menuItem={null} onSubmit={handleFormSubmit} />
        </section>
    )
}