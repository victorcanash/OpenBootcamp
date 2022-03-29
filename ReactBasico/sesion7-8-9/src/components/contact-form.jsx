import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ContactFormComponent = ({ add }) => {

    const nicknameRef = useRef('');
    const emailRef = useRef('');

    const createContact = (e) => {
        e.preventDefault();
        const contact = new Contact(
            nicknameRef.current.value,
            emailRef.current.value,
            true
        );
        add(contact);
    };

    return (
        <form onSubmit={createContact} className="d-flex justify-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
                <label forhtml="Create">Create a new contact</label>
                <input ref={nicknameRef} type="text" id="inputNickname" className="form-control form-control-lg" placeholder="Introduce nickname" required autoFocus/>   
                <input ref={emailRef} type="email" id="inputEmail" className="form-control form-control-lg" placeholder="Introduce mail" required/>
                <button type="submit" className="btn btn-success btn-lg ms-1">
                    Send
                </button>  
            </div>     
        </form>
    );
}
export default ContactFormComponent;

ContactFormComponent.propTypes = {
    add: PropTypes.func.isRequired,
}
