import React from 'react';
import instagram from "../../svgs/instagram.svg";
import email from "../../svgs/paper-plane.svg";
import "./svgs.css"

const InstagramSVG = () => {
    return (
        <img src={instagram} alt="instagram logo" className="svg instagramSVG" />
    )
};

const EmailSVG = () => {
    return (
        <img src={email} alt="email icon - a paper plane" className="svg emailSVG" />
    )
}


export {
    InstagramSVG,
    EmailSVG
}