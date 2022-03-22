import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const [defaultContact, setDefaultContact] = useState(new Contact('Victor', 'Canas', 'victorcanas972@gmail.com', false));

    const switchConnected = () => {
        let connected = defaultContact.connected ? false : true;
        setDefaultContact(new Contact(defaultContact.name, defaultContact.surname, defaultContact.email, connected));
    };

    return (
        <div>
            <h1>Contacts</h1>
            <ContactComponent contact={ defaultContact } switchConnected={ switchConnected }></ContactComponent>
        </div>
    )
}

export default ContactListComponent