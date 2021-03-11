import * as React from "react";
import { Link } from "gatsby";

// markup
const ContactPage = () => {
  return (
    <div>
        <h1>
            Patrycja Zych
        </h1>
        <p>Contact</p>


        <Link to="/">contact</Link>

        <Link to="/PaintingPage">see paint</Link>
        <Link to="/AboutPage">about</Link>
        
        <Link to="/ShippingPage">shipping</Link>
    </div>
    
  )
}

export default ContactPage