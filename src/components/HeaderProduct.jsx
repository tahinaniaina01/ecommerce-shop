import { useContext, useEffect, useState } from "react";
import img from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { SlideBarContext } from "../contexts/SlideBarContext";
import { CartContext } from "../contexts/CartContext";
import { FaSearch,FaShoppingBag } from "react-icons/fa";
import { ProductContext } from "../contexts/ProductContext";

export const HeaderProduct = () => {
    const [ active, setActive ] = useState(false);
    const [ search, setSearch ] = useState("");
    const { setIsOpen } = useContext(SlideBarContext);
    const { cart } = useContext(CartContext);
    const { setProducts,allProducts } = useContext(ProductContext);
    const navigate = useNavigate();
    let totalCart = cart.reduce((acc,curr) => acc+curr.amount , 0)

    useEffect(() =>{
        addEventListener('scroll',()=>{
            scrollY > 6 ? setActive(true):setActive(false);
        });
    },[])
    const hundleSubmit = (e) => {
        e.preventDefault();
        if(search!==""){
            setProducts(
                [...allProducts].filter((item) => {
                        return (
                            (item.title.toUpperCase().indexOf(search.toUpperCase()) != -1) || 
                            (item.category.toUpperCase().indexOf(search.toUpperCase()) != -1)
                        );
                    }
                )
            );
        }
        setSearch("");
        navigate('/ecommerce-shop/');
    }

    return (<header className={`w-full flex justify-center items-center fixed top-0 left-0 z-20 ${active?'bg-white pt-2 shadow-xl':'bg-transparent pt-3'}`} data-aos="fade-down" data-aos-duration="1500">
        <div className="container w-full flex items-center justify-between pt-2 pb-2 px-5">
            <Link to='/ecommerce-shop/'><img src={img} alt="" width="40px"/></Link>
            <form className="flex items-center border-[1px] border-primary px-2 pl-3 py-1 rounded-full md:w-auto overflow-hidden w-[50vw]" onSubmit={(e) => hundleSubmit(e)}>
                <input type="text" className="outline-none bg-transparent pr-1 md:w-auto w-[40vw]" name="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="search" required/>
                <button className="text-primary md:right-2 text-[20px] relative md:w-auto w-[10vw] flex justify-center items-center" type="submit"><FaSearch /></button>
            </form>
            <button className="relative flex justify-center items-center">
                <FaShoppingBag onClick={() => setIsOpen(true)} className="text-3xl"/>
                <span className="absolute pointer-events-none bg-red-500 w-[20px] h-[20px] flex items-center justify-center text-white rounded-full -right-2 -bottom-2">{totalCart<10?totalCart:"+9"}</span>
            </button>
        </div>
    </header>
    );
}