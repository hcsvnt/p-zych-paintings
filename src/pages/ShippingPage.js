import * as React from "react";
import { Link } from "gatsby";

// markup
const App = () => {
  return (
    <div>
        <h1>
            Patrycja Zych
        </h1>
        <p>Shipping</p>
       
         <Link to="/PaintingPage">see paint</Link>
         <Link to="/AboutPage">about</Link>
         <Link to="/ContactPage">contact</Link>
         <Link to="/ShippingPage">shipping</Link>
    </div>
    
  )
}

export default App