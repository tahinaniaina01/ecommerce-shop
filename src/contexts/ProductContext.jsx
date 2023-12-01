import { createContext,useState,useEffect } from "react";
import useSWR from "swr";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [isSearch,setIsSearch] = useState(false);
    const [ allProducts,setAllProducts ] = useState([]);

    const fetcher = (url) => {
        return (
            fetch(url)
                .then( (res) => res.json() )
        );
    }

    const { data, isLoading, error } = useSWR('https://fakestoreapi.com/products',fetcher);

    useEffect(() => {
        if(data){
            setAllProducts(data);
            setProducts(data);
        }
    },[data]);

    if(error)
        console.log("Une erreur s'est produit lors de récupération de donnée");

    console.log(products);

    return (
        <ProductContext.Provider value={ { products, setProducts, isSearch, setIsSearch, isLoading, allProducts } }>
            {children}
        </ProductContext.Provider>
    );
}
