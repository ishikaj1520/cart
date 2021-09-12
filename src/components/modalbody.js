// import useFetch from "./useFetch";
import { useContext} from "react";
import { CartContext } from "../CartContext";
const ModalBody = () => {
//     const{data:products,isPending,error}=useFetch('http://localhost:8000/products')
//     const[total,setTotal]=useState(null);
//     const handleclick=(price,qty)=>{
//          setTotal(qty*price);
//     }
const[cartItems,setCartItems]=useContext(CartContext);
    return ( 
        <div className='modal-body'>
        {/* { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> } */}
         { cartItems.map((cartItem )=>(
          <div className="modal-preview" key={cartItem.id}>
    
          <img src={cartItem.image} alt="item-img"></img>
          <p>{cartItem.itemname}</p>
          <div  className='modal-text'>
          <p><b> Price:₹{cartItem.price}  Qty:{cartItem.qty} </b></p>
          </div>
          </div>
          ))}
           {/* <p><b>Total Amount:₹{total}</b></p> */}
     </div>
     );
}
export default ModalBody;
// {()=>handleclick(product.price,product.qty)}