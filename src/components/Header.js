import React from "react";
import './Header.css'
import Headerlogo from '../Headerlogo.png';

const Header = () => {
    return(
    <div className="HeaderParent">
        <img className='logo' src={Headerlogo} alt="logo" />
        <h3>Digital Clock</h3>
    </div>
        
    );
}
export default Header;