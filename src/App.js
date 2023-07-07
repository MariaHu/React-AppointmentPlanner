import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

 const [contacts, setContact] = useState([]);
 const [appointments, setAppointment] = useState([]);

  /*
  functions to add data to
  contacts and appointments
  */

  const addContact = (name, phone, email) => {
    
     setContact((prev) => (
         [ ...prev,
          
         {  name: name,
            phoneNumber: phone,
            email: email
}
          

     ]));
  };

  const addAppointment = (name, contact, date, time) => {
   
    setAppointment((prev) => ([
         ...prev,
         {
          name: name,
           contact: contact,
           date: date,
           time:time
}
         

   ] ));
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route 
       path="/" 
       element={<Root />}>
    <Route 
       index 
       element={<Navigate to={ROUTES.CONTACTS} 
       replace />} />
    <Route 
         path={ROUTES.CONTACTS} 
         element={<ContactsPage addContact={addContact} contacts={contacts} />} />
    <Route 
         path={ROUTES.APPOINTMENTS} 
         element={<AppointmentsPage addAppointment={addAppointment} appointments={appointments} contacts={contacts} />} />
  </Route>
));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
