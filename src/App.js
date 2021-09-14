import Home from './components/Home';
import Navbar from './components/Navbar';
import data from './data/data';
import {useState} from 'react';
function App() {
  const {products}=data;
  const[cartItems,setCartItems]=useState([{
    itemname: "Imerging-Face",
    price: 9800,
     image:"./Assets/img5.jpg",
    id: 5,
    qty:1
  }]);
  const onAdd = (product) => {
      // const[cartItems,setCartItems]=useContext(CartContext);
      const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <div className="App">
     <Navbar cartItems={cartItems} onAdd={onAdd}/>
     <div className="content">
       <Home products={products} onAdd={onAdd}></Home>
     </div>
    </div>
  );
}

export default App;
