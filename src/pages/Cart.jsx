import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext, useState } from "react";
import { FaMinus,FaPlus } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export const Cart = () => {
    const [ shopping,setShopping ] = useState("10");
    const { cart,incremountAmount,decremountAmount } = useContext(CartContext);
    let totalPrice = cart.reduce((acc,curr) => acc+(curr.price*curr.amount),0);
    const CartItem = () => {
        return cart.map((item) => {
            const { id,image,title,amount,price } = item;

            return (
                <tr key={id} className="border-b-[3px]">
                    <td>
                        <Link to={`/ecommerce-shop/ProductDetails/${id}`}>
                            <div className="flex items-center pb-5">
                                <img className="max-w-[80px] md:w-auto w-[40px]" src={image} alt="" />
                                <h1 className="md:pr-20 pr-5 md:pl-5 pl-3 pd-2 hover:underline text-xs lg:text-xl">{title}</h1>
                            </div>
                        </Link>
                    </td>
                    <td>
                        <div className="flex items-center w-full h-full">
                            <div className="flex items-center gap-2 border p-2">
                                <FaMinus className="cursor-pointer font-semibold" onClick={() => decremountAmount(id)} />
                                <p>{amount}</p>
                                <FaPlus className="cursor-pointer font-semibold" onClick={() => incremountAmount(id)}/>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h4>$ {price}</h4>
                    </td>
                    <td>
                        <h4>
                            $ {parseFloat(price*amount).toFixed(2)}
                        </h4>
                    </td>
                </tr>
            );
        });
    }
    console.log(shopping);
    return (
        <section className="flex items-center justify-center mt-32">
            {
                cart.length>0?
                    <div className="flex xl:container md:flex-row flex-col w-full mx-0 md:mx-10 md:shadow-2xl mb-10 md:p-5 overflow-hidden">
                        <div className="p-3 w-[100vw] m-0 md:w-4/5 shadow-md border-[5px] md:border-none md:shadow-none">
                            <div className="flex items-center justify-between border-b-[5px] m-5">
                                <h1 className="m-5 font-semibold text-xl">Shopping Cart</h1>
                                <h2 className="m-5 font-semibold text-xl">{cart.length} Items</h2>
                            </div>
                            <table className="w-auto m-5">
                                <thead>
                                    <tr>
                                        <td className="w-2/5 font-bold text-sm md:text-xl lg:text-2xl">PRODUCT DETAILS</td>
                                        <td className="w-1/5 font-bold text-sm md:text-xl lg:text-2xl">QUANTITY</td>
                                        <td className="w-1/5 font-bold text-sm md:text-xl lg:text-2xl">PRICE</td>
                                        <td className="w-1/5 font-bold text-sm md:text-xl lg:text-2xl">TOTAL</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <CartItem />
                                </tbody>
                            </table>
                            <Link to="/ecommerce-shop/"><BsArrowRight />Continue shopping</Link>
                        </div>
                        <div className="w-[100vw] m-0 md:w-1/5 shadow-md border-[4px] md:border-none md:shadow-none p-3 flex flex-col">
                            <div className="flex items-center justify-between border-b-[5px] mt-5">
                                <h1 className="m-5 font-semibold md:text-xl">Shopping Cart</h1>
                            </div>
                            <div className="w-full flex items-center justify-between font-bold"> 
                                <h1>Items</h1>
                                <p>$ {(parseFloat(totalPrice)- parseInt(shopping)).toFixed(2)}</p>
                            </div>
                            <div className="my-5">
                                <div className="my-5">
                                    <h1>SHOPPING</h1>
                                    <select name="shop" id="" onChange={(e) => setShopping(e.target.value)} className="w-full outline-none px-2 py-3 text-lg" >
                                        <option value="10">standard shopping - $ 10.00</option>
                                        <option value="20">standard shopping - $ 20.00</option>
                                        <option value="30">standard shopping - $ 30.00</option>
                                    </select>
                                </div>
                                <div className="my-5">
                                    <label>CODE PROMOTION</label>
                                    <input type="text" placeholder="enter your code" className="w-full outline-none px-2 py-3 text-lg"/>
                                </div>
                            </div>
                            <div className="w-full pb-2 flex flex-col gap-y-3 right-0 bottom-0 bg-white pt-2 border-t-2 border-black">
                                <div className="flex w-full justify-between items-center">
                                    <h2><span>Total : </span> $ {parseFloat(totalPrice).toFixed(2)}</h2>
                                </div>
                                <h1 className="bg-primary text-white text-center py-2 text-xl font-medium cursor-pointer">Checkout</h1>                
                            </div>
                        </div>
                    </div>
                :
                    <div className="container flex justify-center items-center h-[10vw] my-[30vh] w-full mx-auto bg-secondary text-red-600 font-bold text-[2rem]">
                        Cart is empthy
                    </div>
            }
        </section>
    );
}