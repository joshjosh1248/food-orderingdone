'use client';
import { useContext, useEffect } from "react";
import SectionHeaders from "../components/layout/SectionHeaders";
import { CartContext , cartProductPrice } from "../components/AppContext";
import CartProduct from "../components/menu/CartProduct";
import toast from "react-hot-toast";

export default function CartPage() {
    const {cartProducts, removeCartProduct} = useContext(CartContext);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          if (window.location.href.includes('canceled=1')) {
            toast.error('Payment failed 😔');
          }
        }
      }, []);
    
    let total = 0;
    for (const p of cartProducts) {
      total += cartProductPrice(p);
    }
   async function proceedToCheckout(ev) {
    ev.preventDefault();

        const promise = new Promise((resolve,reject) => {
             
            fetch('/api/checkout',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    cartProducts,
                }),
            }).then(async(response) => {
                if(response.ok){
                    window.location= await response.json(); 
                }else {
                    reject();
                }
        })
        });
        await toast.promise(promise, {
            loading: 'Preparing your order...',
            success: 'Redirecting to payment...',
            error: 'Something went wrong... Please try again later',
          })
    }
    if (cartProducts?.length === 0) {
        return (
          <section className="mt-8 text-center">
            <SectionHeaders mainHeader="Cart" />
            <p className="mt-4">Your shopping cart is empty 😔</p>
          </section>
        );
      }
    
    return (
        <section className="mt-8">
           
            <div className="text-center">
            <SectionHeaders mainHeader="Cart" />
            </div>

            <div className="mt-8 grid gap-8 grid-cols-2">
            <div>
                {cartProducts?.length === 0 && (<div> No products in Shopping cart</div>)}
                {cartProducts?.length >0 && cartProducts.map((product,index) => ( 
                  <CartProduct product={product} onRemove={removeCartProduct} /> 
                ))}
                <div className="py-2 pr-16 flex justify-end items-center">
                    <div className="text-gray-500">Total</div> 
                    <div className="font-semibold pl-2 text-right">${total}</div>
                </div>
                </div>

            <div className="bg-gray-100 text-center p-4 rounded-lg">
                <h2>Checkout</h2>
                <form onSubmit={proceedToCheckout}> 
                    <button type="submit">Pay ${total}</button>
                </form>
            </div>

            </div>
        </section>
    );
}