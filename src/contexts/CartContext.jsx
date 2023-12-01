import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState([]);
    const addCart = (product,id) => {
        const newItem = {...product, amount: 1};

        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if(cartItem){
            const newCart = [...cart].map((item)=>{
                if(item.id === id)
                    return { ...item,amount: cartItem.amount+1};
                else
                    return item;
            });
            setCart(newCart);
        }
        else
            setCart([...cart,newItem]);
    }
    const filterCart = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if(cartItem){
            const newCart = [...cart].filter((item) => item.id !== id)
            setCart(newCart)
        }
    }
    const incremountAmount = (id) => {
        const newCart = [...cart].map((item)=>{
            if(item.id === id)
                return { ...item,amount: item.amount+1};
            else
                return item;
        });
        setCart(newCart);
    }
    const decremountAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if(cartItem){
            if(cartItem.amount === 1)
                filterCart(cartItem.id)
            else{
                const newCart = [...cart].map((item)=>{
                    if(item.id === id)
                        return { ...item,amount: cartItem.amount-1};
                    else
                        return item;
                });
                setCart(newCart);
            }
        }
    }
    const ClearCart = () => {
        setCart([])
    }
    //console.log(cart);
    return (
        <CartContext.Provider 
            value={
                {
                    cart,
                    addCart,
                    setCart,
                    filterCart,
                    incremountAmount,
                    decremountAmount,
                    ClearCart
                }
            }
        >
            {children}
        </CartContext.Provider>
    );
}