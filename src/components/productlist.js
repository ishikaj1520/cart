import React from "react";
// import { CartContext } from "../CartContext";
export default function Productlist (props)  {
  const {product,onAdd}=props;
   return ( 
          <div className="product-preview">
          <img  src={product.image} alt={product.itemname} />
          <h2>{product.itemname}</h2>
          <div>Price:₹{product.price}</div>
          <div>
            <button onClick={() => onAdd(product)} 
            style={{ 'width':'100% ','backgroundColor':'black','color':'white','cursor':'pointer','border':'1px solid black','fontSize':'11px','borderRadius':'5px','padding':'5px'}}>
                 Add To Cart</button>
          </div>
        </div>
     );
};

