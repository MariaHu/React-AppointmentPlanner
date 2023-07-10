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
 setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
     <br/>
      <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} required/>
      <br/>
     
      <label htmlFor="date">Date </label>
      <br/>
      <input type="date" value={date} onChange={(e) =>{ setDate(e.target.value)}} required/>
      <br/>
      <label htmlFor="time">Time</label>
      <br/>
      <input type="time" value={time} min={getTodayString()} onChange={(e) => {setTime(e.target.value)}} required/>
      <ContactPicker contacts={contacts} onChange={(e) =>{setContact(e.target.value)}} name='contact' contact={contact}/>
      {console.log(contacts) }
      <input type="submit" value='Submit'/>
    </form>
  );
};
