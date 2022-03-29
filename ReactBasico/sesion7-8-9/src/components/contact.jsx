import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

const ContactComponent = ({ contact, connected, remove }) => {

    return (
        <div className="mb-5"
            style={{backgroundColor: 'blue', border: '2px solid black'}}>
            <h1>{contact.nickname}</h1>
            <h2>{contact.email}</h2>
    
            <button type="button" 
                onClick={ () => connected(contact) }
                style={ contact.connected ? 
                            { backgroundColor: 'green' } :
                            { backgroundColor: 'red' }
                        }
            >
                { contact.connected ? 
                    'Disconnect' : 
                    'Connect'
                }
                <i className="bi bi-power"></i>
            </button>

            <button type="button"
                onClick={ () => remove(contact) }
            >
                Remove
                <i className="bi bi-trash-fill"></i>
            </button>
        </div>
    )
}
export default ContactComponent;

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}
