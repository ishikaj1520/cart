import React from "react";
// import { CartContext } from "../CartContext";
const Productlist = (props) => {
  const {product,onAdd}=props;
   
    return ( 
      // <item.Provider value={cartItems}>
          <div className="product-preview">
  
          <img src={product.image} alt={product.itemname}/>        
          <h2>{product.itemname}</h2>
          <p><b>Price:₹{product.price}</b></p> 
          <button style={{
          'width': '100% ','backgroundColor':'black','color':'white','cursor':'pointer','border':'1px solid black','fontSize':'11px','borderRadius':'5px','padding':'5px'}}
          onclick={()=>onAdd(product)}>Add to Cart</button>
          </div>
        // {/* </item.Provider> */}
     );
};

export default Productlist;