
import {Link, Route, Routes} from 'react-router-dom';
import React from "react";
import CHome from "./CHome";
import ChatRoom from "./ChatRoom";

const Navbar= () => {



    return(


        <nav>
            <div className="nav-wrapper">

                <img 
                    src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Instagram original logo"
                />
                <ul id="nav-mobile" className="right">


                    <li><Link to="/profi">Profile</Link></li>
                    <li><Link to="/">Post</Link></li>
                    <li><i className="material-icons">message</i></li>
                    <li><Link to="/ch">CHome</Link></li>
                    <li><Link to="/:roomId">ChatRoom</Link></li>

                </ul>
            </div>
        </nav>


    )
}
export default Navbar;
