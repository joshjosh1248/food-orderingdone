import Image from "next/image";
import Trash from "../../components/icons/Trash";


export default function CartProduct({product,onRemove}){
    return(
        <div className="flex items-center gap-4 border-b py-2">
        <div className="w-24">
            <Image width={240} height={240} src={product.image} alt={''} />
        </div>
        <div className="grow">
            <h3 className="font-semibold">
                {product.name}
            </h3>
        </div>
        <div className="text-lg font-semibold">
            {product.price}
        </div>
        {!!onRemove &&(
          <div className="ml-2">
          <button 
          type="button"
          className="p-2" 
          onClick={() => onRemove(index)}>
              <Trash />
          </button>
      </div>   
        )}
    </div>
    )
}