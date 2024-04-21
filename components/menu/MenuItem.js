import { useContext } from "react";
import { CartContext } from "../AppContext";




export default function MenuItem(menuItem) {
   const { image,name,description,price,quantity,
} = menuItem;



    const{addToCart} =useContext(CartContext);
   


    return(
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <div className="text-center ">
            <img src={image} className="max-h-auto max-h-24 block mx-auto" alt="Food"/>
        </div>
        <h4 className="font-semibold text-xl mb-2">
            {name}
        </h4>
        <p className="text-gray-500 text-sm line-clamp-3">
            {description}
        </p>
        <p  className="text-md mb-2">Quantity available:{quantity}</p>
        <button onClick={() => addToCart(menuItem)}
        className="mt-4 bg-primary text-white rounded-full px-8 py-2">Add to cart ${price}</button>
    </div>
    )
}