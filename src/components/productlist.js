import { useContext} from "react";
import { CartContext } from "../CartContext";
const Productlist = ({products}) => {
  
  // const onAdd = (product) => {
  //   const[cartItems,setCartItems]=useContext(CartContext);
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     // setCartItems([...cartItems, { ...product, qty: 1 }]);
  //     console.log(cartItems);
  //   }
  //   // return (cartItems);
  // };
    return ( 
      // <item.Provider value={cartItems}>
        <div className="product-list">
             {products.map((product)=>(
          <div className="product-preview" key={product.id}>
  
          <img src={product.image} alt="item-img"></img>
          <h2>{product.itemname}</h2>
          <p><b>Price:₹{product.price}</b></p> 
          <button style={{
          'backgroundColor':'black','color':'white','cursor':'pointer','border':'1px solid black','fontSize':'11px','borderRadius':'5px','padding':'5px'}}
          onclick={()=>console.log(product)}>Add to Cart</button>
          </div>
          ))}
        
        </div>
        // {/* </item.Provider> */}
     );
};

export default Productlist;