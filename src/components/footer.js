import React from "react";
import { FaFacebook} from 'react-icons/fa';

import { FaInstagram} from 'react-icons/fa';
import { FaSnapchat} from 'react-icons/fa';
 const Footer =() =>{
return(
    

        <div class="footer">  
         <div class="icon">
            <h2 class="logo">Ticeclothing</h2>
        </div>
       
        <p>&copy; 2021 Ticeclothing.com</p>
        <div className="socialMedia">
        <div className="Socialicons" ><FaFacebook/><FaInstagram/><FaSnapchat/></div>
        </div>
        
</div>
     
);

};
export default Footer;