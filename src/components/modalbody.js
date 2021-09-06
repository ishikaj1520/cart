import useFetch from "./useFetch";
const ModalBody = () => {
    const{data:products,isPending,error}=useFetch('http://localhost:8000/products')
    const modalProducts =products.filter(product=>product.qty!== "")
    return ( 
        <div className='modal-body'>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
     {products &&  modalProducts.map((product)=>(
          <div className="modal-preview" key={product.id}>
  
          <img src={product.image} alt="item-img"></img>
          <h2>{product.itemname}</h2>
          <p><b>Price: {product.price}</b></p> 
          </div>
          ))} 
     </div>
     );
}
 
export default ModalBody;