import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = ({contacts, addContact}) => {
  /*
  state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isDuplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(isDuplicate === false) {
      addContact(name, phone, email);
      setName(name);
      setPhone(phone);
      setEmail(email);
    }
   };
  

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
   const isDuplicateContact = contacts.find(contact => contact.name === name);
   if(isDuplicateContact) {
    setDuplicate(true);}
    else {
      setDuplicate(false);
    }
   }

 , [name, contacts, isDuplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact {isDuplicate? "         Contact already exists !" : "Adding the contact..."}</h2> 
        <ContactForm 
        name = {name}
        setName = {setName}
        email = {email}
        setEmail = {setEmail}
        phone = {phone}
        setPhone = {setPhone}
        handleSubmit = {handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        contacts = {contacts}/>
      </section>
    </div>
  );
};
