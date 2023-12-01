import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Product } from "../components/Product";
import { Hero } from "../components/Hero";
import { Blog } from "../components/Blog";

export const Home = () => {
    const { products,setProducts,isLoading,allProducts } = useContext(ProductContext);
    return (
        <>
            <Hero />
            <section className="p-[20px] flex flex-col gap-y-5" id="products">
                <button onClick={() => setProducts([...allProducts])} className={`bg-primary text-white py-3 font-bold cursor-pointer container mx-auto my-3 ${products.length===20 && "hidden"}`}>All Product</button>
                <h1 className="text-center text-primary mb-5 font-bold text-3xl">PRODUCTS</h1>
                <div className="mx-[5vw]" id="products">
                    {
                        isLoading ?
                                <div className="container flex justify-center items-center h-[20vw] w-full text-2xl">Loading...</div>
                            :
                                products.length > 0 ?
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full mx-auto md:max-w-none gap-10">
                                        {
                                            products.map((product,index) => {
                                                return <Product key={product.id} product={product} delay={index}/>
                                            })
                                        }
                                    </div>
                                :
                                <div className="container flex justify-center items-center h-[10vw] w-full mx-auto bg-secondary text-red-600 font-bold text-[2rem]">
                                    No product found
                                </div>
                    }
                </div>
                <Blog />
            </section>
        </>
    );
}