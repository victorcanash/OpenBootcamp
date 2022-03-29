import React, { useState } from 'react';
import { Contact } from '../models/contact.class';
import ContactComponent from './contact';
import ContactFormComponent from './contact-form';

const ContactListComponent = () => {

    const defaultContact = new Contact(
        'Victor',
        'victorcanas972@gmail.com',
        false
    );

    const [contacts, setContacts] = useState([defaultContact]);

    const connectedContact = (contact) => {
        let index = contacts.indexOf(contact);
        let tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    const addContact = (contact) => {
        let tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    const removeContact = (contact) => {
        let index = contacts.indexOf(contact);
        let tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    return (
        <div>
            <h1>Contacts</h1>
            {contacts.map((contact, index) => {
                return (
                    <ContactComponent 
                        key={index} 
                        contact={contact} 
                        connected={connectedContact}
                        remove={removeContact}>
                    </ContactComponent>
                );
            })}
            <ContactFormComponent 
                add={addContact}>               
            </ContactFormComponent>
        </div>
    )
}
export default ContactListComponent;
