import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  /*

  const handleChange=({target})=>{
    let reference = target.id;
    switch (reference) {
      case "title":
        setTitle(target.value)          
        break;
      case "name":
        setName(target.value)
        break
      case "date":
        setDate(target.value);
        break;
      case "time":
        setTime(target.value);
        break;
      default:
        break;
    }
  }

  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*let newAppointment = {
         title: title,
         contact: contact,
         date: date,
         time:time

    }; */
    alert("Appointment in creation");
    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={title}
        setTitle={setTitle}
        contacts ={contacts}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};