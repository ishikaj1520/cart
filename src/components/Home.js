 import React from "react";
import Productlist from "./productlist";
// import useFetch from "./useFetch";
export default function Home (props){
   const {products,onAdd}=props;
// const{data:products,isPending,error}=useFetch('http://localhost:8000/products')
  return ( 
   //  <div className='home'>
   //     {/* { error && <div>{ error }</div> }
   //    { isPending && <div>Loading...</div> } */}
   // {products.map((product)=>(
   // <Productlist key={product.id} product={product} onAdd={onAdd}>
   //    </Productlist>))}
   //  </div>
     <main className="home">
     <div className="home">
       {products.map((product) => (
         <Productlist key={product.id} product={product} onAdd={onAdd}></Productlist>
       ))}
     </div>
   </main>

   );
}
 
