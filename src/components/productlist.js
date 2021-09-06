import { useState } from "react";

const Productlist = ({products}) => {
  const [qty,setQty]=useState("");
   const HandleSubmit=(e)=>{
       e.preventDefault();
     setQty(qty=>qty+1);
     fetch('http://localhost:8000/products',{
       method: 'PUT',
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(qty)
     })
   }
    return ( 
        <div className="product-list">
             {products.map((product)=>(
          <div className="product-preview" key={product.id}>
  
          <img src={product.image} alt="item-img"></img>
          <h2>{product.itemname}</h2>
          <p><b>Price: {product.price}</b></p> 
          <button style={{
          'backgroundColor':'black','color':'white','cursor':'pointer','border':'1px solid black','fontSize':'11px','borderRadius':'5px','padding':'5px'}}
          onclick={HandleSubmit}>Add to Cart</button>
          </div>
          ))}
        </div>
     );
}
 
export default Productlist;