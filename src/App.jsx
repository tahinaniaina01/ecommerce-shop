import { Routes,Route, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { ProductDetails } from "./pages/ProductDetails"
import { HeaderProduct } from "./components/HeaderProduct"
import { SlideBar } from "./components/SlideBar"
import { Footer } from "./components/Footer"
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { HeaderHome } from "./components/HeaderHome"
import { Cart } from "./pages/Cart"

function App() {
  useEffect(() =>{
    Aos.init();
  },[])

  const location = useLocation();

  return (
    <>
      {
        location.pathname=="/ecommerce-shop/"?
          <HeaderHome />
        :
          <HeaderProduct />
      }
      <Routes>
        <Route path="/ecommerce-shop/" element={<Home />} />
        <Route path="/ecommerce-shop/ProductDetails/:id" element={<ProductDetails />}/>
        <Route path="/ecommerce-shop/Cart" element={<Cart />} />
      </Routes>
      <SlideBar />
      <Footer />
    </>
  )
}

export default App
