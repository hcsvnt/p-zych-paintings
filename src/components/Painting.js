import React from 'react' 

const Painting = (props) => {
    return (
        <div className="painting">
            <img src={props.imageUrl} width="310px" height="auto" alt="generic text" />
            <header>
                <h3>"{props.title}"</h3>
                <span>2017 | oil on canvas | 50x70cm | $360</span>
            </header>
            
            <p>
                are you description?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente enim quas 
                temporibus tempora nihil explicabo, ex odit sint numquam asperiores quis rerum 
                quisquam iusto hic soluta vero nemo iure ipsa.
            </p>
        </div>
    )
}

export default Painting