import React from 'react';
import '../components/ContactComponent.css';
import { InstagramSVG, EmailSVG } from "../components/svgs";

const ContactComponent = () => {
    return (
        <div className="contact">
            <h3>
                Contact
            </h3>
            <div className="svg__wrapper">
                <EmailSVG />
                <InstagramSVG />
            </div>
            <p>
                For purchases, commisions and other enquiries, please drop me an email.
                You can check out some behind the scenes and older work on my instagram.
            </p>
    
        </div>
    )
}

export default ContactComponent;