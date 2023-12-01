import { useContext } from "react";
import { SlideBarContext } from "../contexts/SlideBarContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


export const SlideBar = () => {
    const { isOpen,setIsOpen } = useContext(SlideBarContext);
    const { cart,ClearCart } = useContext(CartContext);
    let totalPrice = cart.reduce((acc,curr) => acc+(curr.price*curr.amount),0);

    return (
        <div className={`fixed ${isOpen?'right-0':'-right-full'} w-full h-full bg-white top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className="relative w-full h-full">
                <div className="flex items-center justify-between p-6">
                    <p className="text-sm font-bold uppercase">Shopping Bag ({cart.length})</p>
                    <IoMdArrowForward onClick={() => setIsOpen(false)} className='text-4xl cursor-pointer h-8 w-8' />
                </div>
                <div className="flex flex-col overflow-y-auto max-h-[100vh] pb-[250px]">
                    {cart.map((item) => {
                        return (
                            <CartItem item={item} key={item.id} />
                        );
                    })}
                </div>
                <div className="absolute w-full pb-2 flex flex-col gap-y-3 right-0 bottom-0 bg-white pt-2 border-t-2 border-black">
                    <div className="flex w-full justify-between items-center">
                        <h2><span>Total : </span> $ {parseFloat(totalPrice).toFixed(2)}</h2>
                        <div className="p-2 bg-red-400 text-white cursor-pointer" onClick={() => ClearCart()}><FaTrash /></div>
                    </div>
                    <Link to="/ecommerce-shop/Cart" className="bg-secondary text-center py-2 text-xl font-medium cursor-pointer" onClick={() => {setIsOpen(false)}}>View Cart</Link>
                    <h1 className="bg-primary text-white text-center py-2 text-xl font-medium cursor-pointer">Checkout</h1>                
                </div>
            </div>
        </div>
    );
}