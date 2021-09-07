// import { useState } from "react";

const Productlist = ({products,addedproducts}) => {
  // const [qty,setQty]=useState("");
   const Handleclick=(id)=>{
    let addedproduct = products.filter(product=> product.id === id)
    //check if the action id exists in the addedItems
   let existed_product= addedproducts.find(product=> id === product.id)
   if(existed_product)
   {
      addedproduct.qty += 1;
  }
   else{
      addedproduct.qty = 1;
   }
      
     fetch('http://localhost:8000/products',{
       method: 'PUT',
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(addedproduct)
     })
   }
    return ( 
        <div className="product-list">
             {products.map((product)=>(
          <div className="product-preview" key={product.id}>
  
          <img src={product.image} alt="item-img"></img>
          <h2>{product.itemname}</h2>
          <p><b>Price:₹{product.price}</b></p> 
          <button style={{
          'backgroundColor':'black','color':'white','cursor':'pointer','border':'1px solid black','fontSize':'11px','borderRadius':'5px','padding':'5px'}}
          onclick={()=>Handleclick(product.id)}>Add to Cart</button>
          </div>
          ))}
        </div>
     );
}
 
export default Productlist;