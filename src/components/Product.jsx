import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { useContext, useState } from "react";

export const Product = ({ product,index }) => {
    const { id,title,image,price,category } = product;
    const { addCart } = useContext(CartContext);
    const [ isHover,setIsHover ] = useState(false);

    return (<div className="mb-[20px] border-solid border-gray border-[.5px] p-5 shadow-xl" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}  data-aos="zoom-in" data-aos-duration={`${index*100}`}  data-aos-offset="100" data-aos-mirror="true">
        <div className="relative overflow-hidden h-[300px] mb-4 group transition">
            <div className="w-full h-full flex justify-center">
                <div className="w-[200px] mx-auto flex justify-center items-center">
                    <img className={`max-h-[160px] ${isHover?"scale-150":""} transition duration-300`} src={image} alt="" />
                </div>
            </div>
            <div className={`absolute ${isHover?"top-0 right-0 opacity-100":"-right-10"} flex justify-center items-center flex-col p-2 gap-y-2 opacity-0 transition-all duration-300`}>
                <button  onClick={() => addCart(product,id)}>
                    <BsPlus className="text-3xl w-12 h-12 text-white bg-red-500"/>
                </button>
                <button className="text-3xl w-12 h-12 flex justify-center items-center bg-white shadow-xl">
                    <Link to={`/ProductDetails/${id}`}><BsEyeFill /></Link>
                </button>
            </div>
        </div>
        <div>
            <p>{category}</p>
            <h2 className="font-bold"><Link to={`/ProductDetails/${product.id}`}>{title}</Link></h2>
            <h3 className="font-bold text-red-600">$ {price}</h3>
        </div>
    </div>);
}