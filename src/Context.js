import React,{useState, useEffect} from "react";
import { Products,ProductDetail } from "./Data";

// create context
const GlobalContext = React.createContext();

// provider
const Provider = (props)=>{

    const [state, setState] = useState({
        Products:[],
        ProductDetail:ProductDetail,
        modalOpen:false
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
    const addToCart = ()=>{
        console.log('add to cart')
    }
    return (
        <GlobalContext.Provider value={{...state,addToCart }}>
                {props.children}
        </GlobalContext.Provider>
    )
};

// Consumer
const Consumer = GlobalContext.Consumer;

export {Provider,Consumer}
export default GlobalContext