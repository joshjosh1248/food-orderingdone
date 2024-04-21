'use client';
import {SessionProvider} from 'next-auth/react';
import { createContext, useEffect, useState } from 'react';
import toast from "react-hot-toast";

export const CartContext =createContext({});

export function cartProductPrice(cartProduct) {
    let price = cartProduct.price;
    return price;
  }






export function AppProvider({children}) {
    const[cartProducts, setCartProducts] =useState([]);
    const ls= typeof window !== 'undefined' ? window.localStorage :null; 


    useEffect(() =>{
        if(ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart')));
        }
    }, []);

    function clearCart() {
        setCartProducts([]);
        saveCartProductToLocalStorage([]);
    }

    function removeCartProduct(indexToRemove) {
        setCartProducts(prevCartProducts => {
            const newCartProducts = prevCartProducts
            .filter((v,index) => index !== indexToRemove);
            saveCartProductToLocalStorage(newCartProducts);
            return newCartProducts;
        });
        toast.success('Succesfully Removed');
    }


    function saveCartProductToLocalStorage(cartProducts) {
        if(ls) {
            ls.setItem('cart', JSON.stringify(cartProducts));
        }
    }
    
       function addToCart(product) {
            setCartProducts(prevProducts => {
                const cartProduct = {...product};
                const newProducts =[ ...prevProducts, cartProduct];
                saveCartProductToLocalStorage(newProducts)
                return newProducts;
            });
            toast.success('Added to cart');
    }
    return(
        <SessionProvider>
            <CartContext.Provider value={{
                cartProducts,setCartProducts,addToCart,removeCartProduct,clearCart,
            }}>
                {children}
            </CartContext.Provider>
        </SessionProvider>
    );

}