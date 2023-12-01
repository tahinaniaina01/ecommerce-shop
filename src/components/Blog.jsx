import { BsArrowRight } from "react-icons/bs";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Blog = () => {
    const { setProducts,allProducts } = useContext(ProductContext);

    const hundelClickCategory = (category) => {
      const productTmp = [...allProducts].filter((item) => item.category === category);
      setProducts(productTmp);
    }

    return (
        <section className="text-gray-600 body-font" id="blog">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3 xl:w-1/4" data-aos="flip-left">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">men's clothing</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <a className="text-indigo-500 inline-flex items-center cursor-pointer" href="#products" onClick={() => hundelClickCategory("men's clothing")}>Learn More
                    <BsArrowRight />
                  </a>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 xl:w-1/4" data-aos="flip-left">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">women's clothing</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <a className="text-indigo-500 inline-flex items-center cursor-pointer" href="#products" onClick={() => hundelClickCategory("women's clothing")}>Learn More
                    <BsArrowRight />
                  </a>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 xl:w-1/4" data-aos="flip-right">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">electronics</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <a className="text-indigo-500 inline-flex items-center cursor-pointer" href="#products" onClick={() => hundelClickCategory("electronics")}>Learn More
                    <BsArrowRight />
                  </a>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 xl:w-1/4" data-aos="flip-right">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">jewelery</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <a className="text-indigo-500 inline-flex items-center cursor-pointer" href="#products" onClick={() => hundelClickCategory("jewelery")}>Learn More
                    <BsArrowRight />
                  </a>
                </div>
              </div>
            </div>  
          </div>
        </section>
    );
}