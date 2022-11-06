import React from "react";
import { Link } from "react-router-dom";

 const Home =() =>{
return(
    

        <div className="home"> 
        <div className="headerContainer">
            <h1> Tice Clothing</h1>
            <p>Get the best quality clothes</p>
            <Link to="/Collection">
           <button>ORDER NOW</button> 
</Link>
          <div className="my-img"> <img  src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/53c64fd92eea42829d66acb100dc7ab6_9366/tiro-21-track-jacket.jpg" alt="shoes"/>
        </div>
        </div>
</div>
     
);

};
export default Home;