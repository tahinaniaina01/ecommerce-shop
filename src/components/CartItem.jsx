import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaPlus,FaMinus } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

export const CartItem = ({item}) => {
    const { id,image,title,amount,price } = item;
    const { filterCart,incremountAmount,decremountAmount } = useContext(CartContext)

    return (
        <div className="flex items-center justify-between w-full border-b-2">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                <Link to={`/ecommerce-shop/ProductDetails/${id}`}>
                    <img className="max-w-[80px]" src={image} alt="" />
                </Link>
                <div className="flex flex-col w-full h-full gap-4">
                    <div className="flex items-center justify-between w-full">
                        <Link to={`/ecommerce-shop/ProductDetails/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
                            {title}
                        </Link>
                        <button className="pr-2" onClick={() => filterCart(id)}><IoMdClose className="" /></button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 my-2 py-1 px-2 border">
                            <FaMinus className="cursor-pointer font-semibold" onClick={() => decremountAmount(id)} />
                            <p>{amount}</p>
                            <FaPlus className="cursor-pointer font-semibold" onClick={() => incremountAmount(id)}/>
                        </div>
                        <p>$ {price}</p>
                        <p>$ {parseFloat(price*amount).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}