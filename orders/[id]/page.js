'use client';
import SectionHeaders from "@/app/components/layout/SectionHeaders";
import {CartContext, cartProductPrice, } from "../../components/AppContext";
import {useContext, useEffect, useState} from "react";
import CartProduct from "@/app/components/menu/CartProduct";
import { useParams } from "next/navigation";



export default function OrderPage() {
        const {clearCart} = useContext(CartContext);
        const [order, setOrder] = useState();
        const [loadingOrder, setLoadingOrder] = useState(true);
        const {id} = useParams();
        useEffect(() => {
          if (typeof window.console !== "undefined") {
            if (window.location.href.includes('clear-cart=1')) {
              clearCart();
            }
          }
          if (id) {
            setLoadingOrder(true);
            fetch('/api/orders?_id='+id).then(res => {
              res.json().then(orderData => {
                setOrder(orderData);
                setLoadingOrder(false);
              });
            })
          }
        }, []);
      
        let total = 0;
        if (order?.cartProducts) {
          for (const product of order?.cartProducts) {
            total += cartProductPrice(product);
          }
        }
      
        return (
          <section className="max-w-2xl mx-auto mt-8">
            <div className="text-center">
              <SectionHeaders mainHeader="Your order" />
              <div className="mt-4 mb-8">
                <p>Thanks for your order.</p>
                <p>We will make sure you eat a healthy meal</p>
              </div>
            </div>
            {loadingOrder && (
              <div>Loading order...</div>
            )}
            {order && (
              <div className="grid md:grid-cols-2 md:gap-16">
                <div>
                  {order.cartProducts.map(product => (
                    <CartProduct key={product._id} product={product} />
                  ))}
                  <div className="text-right py-2 text-gray-500">
                    Total:
                    <span className="text-black font-bold inline-block w-8">${total}</span>
                    <br />
                  </div>
                </div>
              </div>
            )}
          </section>
        );
    
}