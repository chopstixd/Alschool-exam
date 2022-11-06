import React from "react";
import { Link} from "react-router-dom";



function Navbar(){

return (
    
      
 <div className ="navbar">
  <div class="icon">
            <h2 class="logo">Ticeclothing</h2>
        </div>

  <div className="Rightside">
      <Link to="/">Home</Link>
      <Link  to="/About">About</Link>

      <Link  to="/Collection">Collection</Link>
       <Link  to="/Contact">Contact</Link>  
      <Link  to="/User">User</Link>
      <Link  to="/SignUp"><button className="btnnn">Sign Up</button></Link>
      <Link  to="/Login"><button className="btttn">Login</button></Link>

</div>
      </div>
      );
      };
      export default Navbar;