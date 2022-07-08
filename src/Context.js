import React,{useState} from "react";
import { Products,ProductDetail } from "./Data";

// create context
const GlobalContext = React.createContext();

// provider
const Provider = (props)=>{

    const [state, setState] = useState({
        Products:Products,
        ProductDetail:ProductDetail,
        modalOpen:false
    })

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