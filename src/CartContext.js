import React ,{useState,createContext} from 'react';
import ModalBody from './components/modalbody';
import Productlist from './components/productlist';
export const CartContext=createContext();
export const CartProvider=()=>{
    const [cartItems,setCartItems]=useState([]);
    return(
        <CartContext.Provider value={[cartItems,setCartItems]}>
            <Productlist/>
            <ModalBody/>
        </CartContext.Provider>
    );

}