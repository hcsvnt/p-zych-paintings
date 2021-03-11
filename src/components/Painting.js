import React from 'react' 

const Painting = (props) => {
    return (
        <div className="painting">
            <p>{props.title}</p>
            <img src={props.imageUrl} width="300px" height="auto" alt="generic text" />
            <p>are you</p>
        </div>
    )
}

export default Painting