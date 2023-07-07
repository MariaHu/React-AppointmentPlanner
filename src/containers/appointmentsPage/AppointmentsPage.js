import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, setAppointment}) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let newAppointment = {
         title: title,
         name: name,
         date: date,
         time:time

    };
    setAppointment(newAppointment);
    setTitle(title);
    setName(name);
    setDate(date);
    setTime(time);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={title}
        contacts ={contacts}
        name={name}
        
        date={date}
        
        time={time}
        onChange= {handleChange}
        onSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointments} contacts={contacts}/>
      </section>
    </div>
  );
};