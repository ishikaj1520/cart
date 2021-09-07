import { useState } from "react";
import useFetch from "./useFetch";
const ModalBody = () => {
    const{data:products,isPending,error}=useFetch('http://localhost:8000/products')
    const[total,setTotal]=useState(null);
    const handleclick=(price,qty)=>{
         setTotal(qty*price);
    }
    return ( 
        <div className='modal-body'>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
     {products &&  products.filter((product)=>{
          if(product.qty!="")return product}).map((product )=>(
          <div className="modal-preview" key={product.id}>
    
          <img src={product.image} alt="item-img"></img>
          <p>{product.itemname}</p>
          <div className='modal-text'>
          <p><b> Price:₹{product.price}  Qty:{product.qty} {()=>handleclick(product.price,product.qty)}</b></p>
          </div>
          </div>
          ))} 
           <p>Total Amount:₹{total}</p>
     </div>
     );
}
export default ModalBody;