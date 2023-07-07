import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit = {handleSubmit}>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" 
      value={name}
      onChange={(e) => {setName(e.target.value)}}/>
      <br/>
      <label for="phone">Phone Number</label>
      <input type="text" id="phone" name="phone" 
      value={phone}
      pattern=' ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
      onChange={(e) => {setPhone(e.target.value)}}/>
      <br/>
      <label for="email">Email</label>
      <input type="text" id="email" name="email" 
      value={email}
      onChange={(e) => {setEmail(e.target.value)}}/>
     <br/>

   <input type="submit" value='Submit'/>
    </form>
  );
};

