import React from 'react';
import { Link } from 'gatsby';
import "./paintingsbutton.css";

const PaintingsButton = () => {
    return (
      <div className="">
        <button className="buttonCTA">
          <Link to="/PaintingPage" className="link" disabled >see paintings!</Link>
        </button>
      </div>
    )
  }

  export default PaintingsButton;