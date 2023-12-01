import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { addCart } = useContext(CartContext)
    
    const product = products.find(item => item.id == id)
    if(!product){
        return (<section>
            <h1>Loading...</h1>
        </section>);
    }
    const { title,price,description,image } = product;

    return (<section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="mb-8 lg:mb-0">
                <img className="max-w-[200px] lg:max-w-[300px]" src={image} alt="" />
            </div>
            <div className="flex-1 text-center lg:text-left lg:mx-32">
                <h1 className="text-[26px] font-medium mb-2 mx-auto max-w-[450px] lg:mx-0">{title}</h1>
                <h2 className="text-[20px] mb-2 mx-auto text-red-600">$ {price}</h2>
                <p className="mb-8">{description}</p>
                <button className="bg-primary py-4 px-8 text-white" onClick={() => addCart(product,product.id)}>
                    Add to cart
                </button>
            </div>
        </div>
    </section>);
}