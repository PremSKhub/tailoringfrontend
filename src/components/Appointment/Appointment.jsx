// import React from 'react'

// import './Appointment.css'
// import Page1Logo from '../../assets/page1logo.png'
// const Appointment = () => {
//   return (
//     <section className='appointment-container'>
//       <div>
//         <div className="header">
//           <img src={Page1Logo} alt="Logo" />
//         </div>
//         <div className="container">
//           <h1>Appointment Scheduling</h1>
//           <div className="form-group">
//             <label htmlFor="date">Select Date</label>
//             <input type="date" id="date" name="date" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="time">Select Time</label>
//             <select id="time" name="time" required>
//               <option value>Select Time</option>
//               <option value="09:00 AM">09:00 AM</option>
//               <option value="10:00 AM">10:00 AM</option>
//               <option value="11:00 AM">11:00 AM</option>
//               <option value="12:00 PM">12:00 PM</option>
//               <option value="01:00 PM">01:00 PM</option>
//               <option value="02:00 PM">02:00 PM</option>
//               <option value="03:00 PM">03:00 PM</option>
//               <option value="04:00 PM">04:00 PM</option>
//               <option value="05:00 PM">05:00 PM</option>
//             </select>
//           </div>
//           <button type="button" onclick="displayAppointment()">Submit</button>
//           <div id="display" />
//         </div>
//       </div>

//     </section>
//   )
// }

// export default Appointment







import React, { useState } from 'react';

import './Appointment.css';
import Page1Logo from '../../assets/page1logo.png';

const Appointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState('');

  
  const displayAppointment = () => {
    if (date && time) {
      setAppointmentDetails(`Your appointment is scheduled for ${date} at ${time}.`);
    } else {
      setAppointmentDetails('Please select both date and time.');
    }
  };

  return (
    <section className='appointment-container'>
      <div>
        {/* <div className="header">
          <img src={Page1Logo} alt="Logo" />
        </div> */}
        <div className="container">
          <h1>Appointment Scheduling</h1>
          <div className="form-group">
            <label htmlFor="date">Select Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Select Time</label>
            <select
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Select Time</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
            </select>
          </div>
          <button type="button" onClick={displayAppointment}>Submit</button>
          <div id="display">
            {appointmentDetails && <p>{appointmentDetails}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
