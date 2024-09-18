// import React from 'react';
// import './NewCustomer.css';
// import Page1Logo from '../../assets/page1logo.png';

// const NewCustomer = () => {
//   return (
//     <section className='new-customer-container'>
//       <div><h1 className='heading animated-heading'>NEW CUSTOMER</h1></div>
//       <div className="container animated-container">
//         <form>
//           {/* First Name and Last Name */}
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="firstName">First Name:</label>
//               <input type="text" id="firstName" name="firstName" placeholder="Enter first name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="lastName">Last Name:</label>
//               <input type="text" id="lastName" name="lastName" placeholder="Enter last name" required />
//             </div>
//           </div>

//           {/* Email and Phone Number */}
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input type="email" id="email" name="email" placeholder="Enter email address" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Phone Number:</label>
//               <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required />
//             </div>
//           </div>

//           {/* Gender */}
//           <div className="form-group">
//             <label>Gender:</label>
//             <div>
//               <input type="radio" id="male" name="gender" value="male" required />
//               <label htmlFor="male">Male</label>
//               <input type="radio" id="female" name="gender" value="female" required />
//               <label htmlFor="female">Female</label>
//             </div>
//           </div>

//           {/* Address Section */}
//           <div className="form-group">
//             <label htmlFor="addressLine1">Address Line 1:</label>
//             <input type="text" id="addressLine1" name="addressLine1" placeholder="Enter address line 1" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="addressLine2">Address Line 2:</label>
//             <input type="text" id="addressLine2" name="addressLine2" placeholder="Enter address line 2" />
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="postalCode">Postal Code:</label>
//               <input type="text" id="postalCode" name="postalCode" placeholder="Enter postal code" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="city">City:</label>
//               <input type="text" id="city" name="city" placeholder="Enter city" required />
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="state">State:</label>
//             <input type="text" id="state" name="state" placeholder="Enter state" required />
//           </div>

//           {/* Submit Button */}
//           <div className="form-group form-submit">
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default NewCustomer;









import React from 'react';
import './NewCustomer.css';

const NewCustomer = () => {
  return (
    <section className='new-customer-container'>
      <div><h1 className='heading animated-heading'>NEW CUSTOMER</h1></div>
      <div className="container animated-form">
        <form>
          {/* First Name and Last Name */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" placeholder="Enter first name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" placeholder="Enter last name" required />
            </div>
          </div>

          {/* Email and Phone Number */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter email address" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required />
            </div>
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender:</label>
            <div>
              <input type="radio" id="male" name="gender" value="male" required />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" required />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          {/* Address Section */}
          <div className="form-group">
            <label htmlFor="addressLine1">Address Line 1:</label>
            <input type="text" id="addressLine1" name="addressLine1" placeholder="Enter address line 1" required />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine2">Address Line 2:</label>
            <input type="text" id="addressLine2" name="addressLine2" placeholder="Enter address line 2" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code:</label>
              <input type="text" id="postalCode" name="postalCode" placeholder="Enter postal code" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" placeholder="Enter city" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" placeholder="Enter state" required />
          </div>

          {/* Submit Button */}
          <div className="form-group submit-btn-container" id='sbt-btn'>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewCustomer;
