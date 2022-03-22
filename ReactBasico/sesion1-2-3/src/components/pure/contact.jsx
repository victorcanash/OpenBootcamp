import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact, switchConnected }) => {

    return (
        <div>
            <h2>{ contact.name + ' ' + contact.surname }</h2>
            <h3>{ contact.email }</h3>
            <h3>{ contact.connected ? 'Online contact' : 'Contact not available' }</h3>
            <button onClick={ switchConnected }>{ contact.connected ? 'Disconnect' : 'Connect' }</button>
        </div>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    switchConnected: PropTypes.func
}

export default ContactComponent