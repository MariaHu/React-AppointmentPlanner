import React from "react";

export const ContactPicker = ({ contact, onChange, contacts }) => {
  console.log(contacts); 
  return (
    <>
    
     
    
      <label>Contact: {contact}
        <select
          value={contact}
          onChange={onChange}
          name="contact"
        >
          <option key="default" value="">No Contact Selected</option>
          {
            contacts.map((person, index) => {
              return <option key={index} value={person.name}>{person.name}</option>
            })
          }
        </select>
      </label>
    </>
  );
};
