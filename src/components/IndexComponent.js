import React from 'react';
import {Link} from 'gatsby'
import '../components/IndexComponent.css'

const IndexComponent = () => {
    return (
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
    )
}

export default IndexComponent