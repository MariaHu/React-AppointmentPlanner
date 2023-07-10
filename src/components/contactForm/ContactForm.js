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
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" 
      value={name}
      onChange={(e) => {setName(e.target.value)}}/>
      <br/>
      <label htmlFor="phone">Phone Number</label>
      <input type="text" id="phone" name="phone" 
      value={phone}
      /*pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" */
      onChange={(e) => {setPhone(e.target.value)}}/>
      <br/>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" 
      value={email}
      onChange={(e) => {setEmail(e.target.value)}}/>
     <br/>

   <input type="submit" value='Submit'/>
    </form>
  );
};

