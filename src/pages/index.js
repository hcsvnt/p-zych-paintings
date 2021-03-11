import * as React from "react";
import Layout from "../components/Layout.js"
import { Link } from "gatsby";

// markup
const App = () => {
  return (
    <Layout>
         <div className="index__logo">
            <h1>
                Patrycja Zych
            </h1>
            <p>
                <Link to="/PaintingPage" className="link">
                    Paintings
                </Link>
            </p>
        </div>
    </Layout>
  )
}

export default App
