// import useFetch from "./useFetch";
const ModalBody = (props) => {
//     const{data:products,isPendinimport { useContext} from "react";
// import { CartContext } from "../CartContext";g,error}=useFetch('http://localhost:8000/products')
//     const[total,setTotal]=useState(null);
//     const handleclick=(price,qty)=>{
//          setTotal(qty*price);
//     }
// const[cartItems,setCartItems]=useContext(CartContext);
const { cartItems, onAdd } = props;
const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
const taxPrice = itemsPrice * 0.14;
const shippingPrice = itemsPrice > 2000 ? 0 : 20;
const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return ( 
        <div className='modal-body'>
        {cartItems.length===0 && <div>Cart is Empty</div>}
        {/* { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> } */}
         { cartItems.map((cartItem )=>(
          <div className="modal-preview" key={cartItem.id}>
    
          <img src={cartItem.image} alt="item-img"></img>
          <p>{cartItem.itemname}</p>
          <div  className='modal-text'>
          <p><b> Price:₹{cartItem.price}  Qty:{cartItem.qty} </b>
          <button onClick={() => onAdd(cartItem)} className="add">
                +
          </button></p>
          </div>
          </div>
          ))}
          
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <p>Items Price:{itemsPrice.toFixed(2)}</p>
      
              <p>Tax Price:{taxPrice.toFixed(2)}</p>

              <p>Shipping Price:{shippingPrice.toFixed(2)}</p>

            <p><strong>Total Price:{totalPrice.toFixed(2)}</strong></p>
            </div>
      </>
       )}
    </div>
     );
}
export default ModalBody;