import React,{useState, useEffect} from "react";
import { Products,ProductDetail } from "./Data";

// create context
const GlobalContext = React.createContext();

// provider
const Provider = (props)=>{

    const [state, setState] = useState({
        Products:[],
        ProductDetail:ProductDetail,
        modalOpen:false,
        cart:[]
    })

    useEffect(()=>{
        setProducts()
    }, [])

const setProducts = ()=> {
    let ProductsCopy = [];
    Products.forEach((product)=>{
        const singleProduct = {...product}
        ProductsCopy = [...ProductsCopy, singleProduct]
        // ProductsCopy.push(singleProduct)
    })
  
    setState({
        ...state,
        Products:ProductsCopy
    })
}


        // get product
        const getProduct = (slug)=>{
            const product = state.Products.find((product) => product.slug === slug)
            return product
        }
        // product detail
        const productDetailHandler = (slug)=>{
             const product = getProduct(slug)
             setState({...state, ProductDetail:product})
        }
 
        // add item to cart
    const addToCart = (slug)=>{
        // copy products into a new array
        let tempProducts = [...state.Products]
        // get index of product
        const index = tempProducts.indexOf(getProduct(slug))
        // get product by index
        let product = tempProducts[index]
    //    update count, inCart and total
         product.count = 1;
         product.inCart = true;
         product.total = product.price;
 

        //  tell the state about the current changes
         setState({
            ...state,
            Products:tempProducts,
            cart: [...state.cart,product]
         })
    }

    console.log(state)
    return (
        <GlobalContext.Provider value={{
            ...state,
            addToCart,
            productDetailHandler
            }}>
                {props.children}
        </GlobalContext.Provider>
    )
};

// Consumer
const Consumer = GlobalContext.Consumer;

export {Provider,Consumer}
export default GlobalContext