//OK
import React from 'react';
import { Link } from "react-router-dom";
import allstyles from '../styles/allstyles.css';
function NavbarComponent(){
    return(      
    <nav id="navSection">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">NAVBAR</span>
            </button>
       <div id="btnBranding">
         <a href="/">KADIDJA</a>
       </div>
       
       <div id="leMenuNav">
         <div id ="leBouton">
           <button type="button" id="showLeMenuLiLDevice">
             <span>MENU</span>
           </button>
           <button type="button" id="hideLeMenuLiLDevice">
             <span>CLOSE</span>
           </button>
         </div>
         <ul id="listMenuNav">
           <li className="listMenuNavItem"><Link to="/aboutme">QUI SUIS JE</Link></li>
           <li className="listMenuNavItem"><Link to="/carrer">MON PARCOURS</Link></li>
           <li className="listMenuNavItem"><Link to="/works">MON PORTFOLIO</Link></li>
           <li className="listMenuNavItem"><Link to="/contactme">ME CONTACTER</Link></li>
         </ul>
       </div>
       
       <div id="barreDeRecherche">
         <button id="bouttonRechercher">
           <span>SEARCH BUTTON</span>
         </button>
       </div>
       
     </nav>
      
           
    );
}

export default NavbarComponent;