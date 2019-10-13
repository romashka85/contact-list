import React, { Component } from 'react';
import Contact from '../components/Contact';
import { contacts } from '../contacts.json';


class ContactList extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         contacts: contacts
    //     }

    // }

    onclickShowEditForm = ({onRouteChange}) => {
     console.log('edit')
    }

    render(){
        return (
            <div>
                {
                    contacts.map(contact => {
                        return (
                            <Contact 
                                key={contact.id}
                                name={contact.name}
                                email={contact.email}
                                id={contact.id}
                                onclickShowEditForm= {this.onclickShowEditForm}
                            />
                                /* <EditForm
                                key={contact.id}
                                name={contact.name}
                                email={contact.email}
                                id={contact.id}
                                /> */
                                
                                
                            )
                    })
                }
            </div>
        )
    }
    
}

export default ContactList;