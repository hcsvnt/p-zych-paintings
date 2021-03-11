import React from 'react' 

const Painting = (props) => {
    return (
        <div className="painting">
            <img src={props.imageUrl} width="300px" height="auto" alt="generic text" />
            <h3>{props.title}</h3>
            <p>are you description?</p>
        </div>
    )
}

export default Painting