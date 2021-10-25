import react from "react";
import { useState } from "react";

function Test(){

    const [products] = useState([
        
        {

        name :'cell',
        cost:'20 rs',
        },

    ]);


    return(
        <>

        <div className="app">

        {products.map((product ,idx)=>(
        
        
        <div className="productimage" 
        key={idx}>
        <h1>{product.name}</h1>
        <h1>{product.cost}</h1>
     
       
        </div>
        ))}
        </div>

        </>


        
  

    )


}

export default Test;