
import { createContext, useState } from "react"

// create context


export const ProductContext = createContext();

// create a provider for product context: it will provide the product state
export const ProductsProvider = ({children}) => {
   

    //fetch the list of product from local storage, if no product is there fetch empty array

    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem("products")
        return savedProducts ? JSON.parse(savedProducts) : []
    });


    return(
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}


export const ThemeContext = createContext("light");

//create a provider