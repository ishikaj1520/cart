 import {  useState } from "react";
import Productlist from "./productlist";
import useFetch from "./useFetch";
const Home = ()=>{
const{data:products,isPending,error}=useFetch('http://localhost:8000/products')
  return ( 
    <div className='home'>
       { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
   {products && <Productlist products={products} />}
    </div>
   );
}
 
export default Home;