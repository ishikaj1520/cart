import { useState } from 'react';
// import { IconContext } from 'react-icons';
import {Button,Modal} from 'react-bootstrap';
import {CgShoppingCart} from 'react-icons/cg';
// import {MdCancel} from 'react-icons/md';
import ModalBody from './modalbody';
const Navbar = ({cartItems,onAdd}) => {
    const [state,setstate]=useState(false);
    const handleclick=()=>{
       setstate({show:!state.show});
   }

    return (
        <div className="navbar">
           <h1>i.d.e.a</h1>
           <div className="links">
       <Button >Sign in</Button>
       <Button onClick={handleclick} ><CgShoppingCart  size="2em" color='white' />Cart  {cartItems.length}</Button>
       <div className="cart" >
        <Modal show={state.show} onHide={handleclick} >
          <Modal.Header style={{textAlign:'left',margin:'0px',fontFamily: 'Abel',fontSize:'15px'}} closeButton>SHOPPING BAG</Modal.Header>  
          <Modal.Body><ModalBody cartItems={cartItems} onAdd={onAdd}/></Modal.Body>
          <Modal.Footer>
              <Button style={{backgroundColor:'grey', border:'none'}} onClick={() => alert('Implement Checkout!')}> Place Order</Button>
          </Modal.Footer>
        </Modal>
        </div>
        </div>
        </div>
      );
}
 
export default Navbar;