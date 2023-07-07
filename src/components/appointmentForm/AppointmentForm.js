import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  handleChange,
  contact,
  
  date,
  
  time,
  
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit }>
      <label for="title">Title</label>
     <br/>
      <input type="text" value={title} onChange={handleChange}/>
      <br/>
     <label for="contact">Name</label>
     <br/>
      <input type="text" value={contact} onChange={handleChange}/>
      <br/>
      <label for="date">Date </label>
      <br/>
      <input type="date" value={date} onChange={handleChange}/>
      <br/>
      <label for="time">Time</label>
      <br/>
      <input type="time" value={time} min={getTodayString()} onChange={handleChange}/>
      <ContactPicker contacts={contacts} onChange={handleChange} contact={contact}/>
      {console.log(contacts) }
      <input type="submit" value='Submit'/>
    </form>
  );
};
