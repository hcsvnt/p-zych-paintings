import * as React from "react";
import { Link } from "gatsby";
// import '../pages/main.css'
import '../components/Layout.css'

// markup
const Layout = ({children}) => {
  return (
    <div className="container">

        {children}
        
        <Link to="/" className="link__index link" >/index</Link>
        <Link to="/PaintingPage" className="link__painting link" >see paint</Link>
        <Link to="/AboutPage" className="link__about link" >about</Link>
        <Link to="/ContactPage" className="link__contact link" >contact</Link>
        <Link to="/ShippingPage" className="link__shipping link" >shipping</Link>
    </div>
    
  )
}

export default Layout
