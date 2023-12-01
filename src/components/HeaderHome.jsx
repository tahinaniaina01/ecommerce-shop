import { useContext, useEffect, useState } from "react";
import { SlideBarContext } from "../contexts/SlideBarContext";
import { CartContext } from "../contexts/CartContext";
import { FaShoppingBag } from "react-icons/fa";
import img from "../assets/ecommerce.avif";

export const HeaderHome = () => {
    const [ active, setActive ] = useState(false);
    //const [ search, setSearch ] = useState("");
    const { setIsOpen } = useContext(SlideBarContext);
    const { cart } = useContext(CartContext);
    let totalCart = cart.reduce((acc,curr) => acc+curr.amount , 0)
    useEffect(() =>{
        addEventListener('scroll',()=>{
            scrollY > 6 ? setActive(true):setActive(false);
        });
    },[])

    return (
        <header className={`fixed w-full z-20 text-gray-600 ${active?'bg-white pt-2 shadow-xl':'bg-transparent pt-3'} body-font`}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-600 mb-4 md:mb-0">
                    <img src={img} alt="" className="w-12 h-12" />
                    <span className="ml-3 text-xl">e-commerce</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-400 cursor-pointer text-xl" href="#home">Home</a>
                    <a className="mr-5 hover:text-gray-400 cursor-pointer text-xl" href="#products">Products</a>
                    <a className="mr-5 hover:text-gray-400 cursor-pointer text-xl" href="#blog">Blog</a>
                    <button className="relative flex justify-center items-center">
                        <FaShoppingBag onClick={() => setIsOpen(true)} className="text-2xl"/>
                        <span className="absolute pointer-events-none bg-red-500 w-[20px] h-[20px] flex items-center justify-center text-white rounded-full -right-2 -bottom-2">{totalCart<10?totalCart:"+9"}</span>
                    </button>
                </nav>
            </div>
        </header>
    );
}