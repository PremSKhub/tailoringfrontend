// // import React from 'react'
// // import { useNavigate } from 'react-router-dom'

// // import './ExistingCustomer.css'
// // import Page1Logo from '../../assets/page1logo.png'
// // import Search from '../../assets/search.svg'
// // const ExistingCustomer = () => {
// //   const navigate = useNavigate();

// //   const handleClick = (path) => {
// //     navigate(path);
// //   }

// //   return (
// //     <section className='existing-customer-container'>
// //       {/* <div className="header">
// //         <img src={Page1Logo} alt="Logo" />
// //       </div> */}
// //       <div className="heading">EXISTING CUSTOMER</div>
// //       <div className="input-container">
// //         <div className="input-group mb-3">
// //           <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
// //           <span className="input-group-text" id="basic-addon2">
// //             <img src={Search} />
// //           </span>
// //         </div>
// //       </div>
// //       <div className="container mt-5 d-flex justify-content-center">
// //         <div className="card">
// //           <div className="card-body">
// //             <h5 className="card-title">User Information</h5>
// //             <p className="card-text"><strong>Name:</strong> Customer 1</p>
// //             <p className="card-text"><strong>Customer ID:</strong> 100</p>
// //             <p className="card-text"><strong>Gender:</strong> Male</p>
// //             <p className="card-text"><strong>Mobile:</strong> 1234567890</p>
// //             <p className="card-text"><strong>Email:</strong> cus1@gmail.com</p>
// //             <p className="card-text"><strong>Address:</strong> Anna Nagar, Chennai</p>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="btn-container">
// //         <div className="btn-group">
// //           <button type="button" className="btn btn-primary" onClick={() => handleClick('100/measurement-details')}>Measurement Details</button>
// //           <button type="button" className="btn btn-primary">Order Details</button>
// //         </div>
// //         <div className="btn-group">
// //           <button type="button" className="btn btn-primary">Add New Measurement</button>
// //           <button type="button" className="btn btn-primary">Place New Order</button>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default ExistingCustomer




// // import React from 'react'
// // import { useNavigate } from 'react-router-dom'

// // import './ExistingCustomer.css'
// // import Page1Logo from '../../assets/page1logo.png'
// // import Search from '../../assets/search.svg'

// // const ExistingCustomer = () => {
// //   const navigate = useNavigate();

// //   const handleClick = (path) => {
// //     navigate(path);
// //   }

// //   return (
// //     <section className='existing-customer-container'>
// //       <div className="heading">EXISTING CUSTOMER</div>
// //       <div className="input-container">
// //         <div className="input-group mb-3">
// //           <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
// //           <span className="input-group-text" id="basic-addon2">
// //             <img src={Search} alt="Search" />
// //           </span>
// //         </div>
// //       </div>
// //       <div className="content-container">
// //         <div className="container d-flex justify-content-center">
// //           <div className="card">
// //             <div className="card-body">
// //               <h5 className="card-title">User Information</h5>
// //               <p className="card-text"><strong>Name:</strong> Customer 1</p>
// //               <p className="card-text"><strong>Customer ID:</strong> 100</p>
// //               <p className="card-text"><strong>Gender:</strong> Male</p>
// //               <p className="card-text"><strong>Mobile:</strong> 1234567890</p>
// //               <p className="card-text"><strong>Email:</strong> cus1@gmail.com</p>
// //               <p className="card-text"><strong>Address:</strong> Anna Nagar, Chennai</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="btn-container">
// //           <div className="btn-group">
// //             <button type="button" className="btn btn-primary" onClick={() => handleClick('100/measurement-details')}>Measurement Details</button>
// //             <button type="button" className="btn btn-primary">Order Details</button>
// //           </div>
// //           <div className="btn-group">
// //             <button type="button" className="btn btn-primary">Add New Measurement</button>
// //             <button type="button" className="btn btn-primary">Place New Order</button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default ExistingCustomer;















// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import './ExistingCustomer.css';
// import Search from '../../assets/search.svg';

// const ExistingCustomer = () => {
//   const navigate = useNavigate();

//   const handleClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <section className='existing-customer-container'>
//       <div className="heading">EXISTING CUSTOMER</div>
//       <div className="input-container">
//         <div className="input-group mb-3">
//           <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" />
//           <span className="input-group-text" id="basic-addon2">
//             <img src={Search} alt="Search" />
//           </span>
//         </div>
//       </div>
//       <div className="content-container">
//         <div className="container d-flex justify-content-center">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">User Information</h5>
//               <p className="card-text"><strong>Name:</strong> Customer 1</p>
//               <p className="card-text"><strong>Customer ID:</strong> 100</p>
//               <p className="card-text"><strong>Gender:</strong> Male</p>
//               <p className="card-text"><strong>Mobile:</strong> 1234567890</p>
//               <p className="card-text"><strong>Email:</strong> cus1@gmail.com</p>
//               <p className="card-text"><strong>Address:</strong> Anna Nagar, Chennai</p>
//             </div>
//           </div>
//         </div>
//         <div className="btn-container">
//           <div className="btn-group">
//             <button type="button" className="btn btn-primary" onClick={() => handleClick('100/measurement-details')}>Measurement Details</button>
//             <button type="button" className="btn btn-primary" onClick={() => handleClick('/order-details')}>Order Details</button>
//           </div>
//           <div className="btn-group">
//             <button type="button" className="btn btn-primary" onClick={() => handleClick('/measurement-entry')}>Add New Measurement</button>
//             <button type="button" className="btn btn-primary" onClick={() => handleClick('/place-order')}>Place New Order</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExistingCustomer;
















// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import './ExistingCustomer.css';
// import Search from '../../assets/search.svg';

// const ExistingCustomer = () => {
//   const navigate = useNavigate();

//   const handleClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <section className='existing-customer-container'>
//       <div className="heading">EXISTING CUSTOMER</div>
//       <div className="input-container">
//         <div className="input-group mb-3">
//           <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" />
//           <span className="input-group-text" id="basic-addon2">
//             <img src={Search} alt="Search" />
//           </span>
//         </div>
//       </div>
//       <div className="content-container">
//         <div className="container d-flex justify-content-center">
//           <div className="card stylish-card">
//             <div className="card-body">
//               <h5 className="card-title">User Information</h5>
//               <p className="card-text"><strong>Name:</strong> Customer 1</p>
//               <p className="card-text"><strong>Customer ID:</strong> 100</p>
//               <p className="card-text"><strong>Gender:</strong> Male</p>
//               <p className="card-text"><strong>Mobile:</strong> 1234567890</p>
//               <p className="card-text"><strong>Email:</strong> cus1@gmail.com</p>
//               <p className="card-text"><strong>Address:</strong> Anna Nagar, Chennai</p>
//             </div>
//           </div>
//         </div>
//         <div className="btn-container">
//           <div className="btn-group">
//             <button type="button" className="btn btn-primary stylish-btn" onClick={() => handleClick('100/measurement-details')}>Measurement Details</button>
//             <button type="button" className="btn btn-primary stylish-btn" onClick={() => handleClick('/order-details')}>Order Details</button>
//           </div>
//           <div className="btn-group">
//             <button type="button" className="btn btn-primary stylish-btn" onClick={() => handleClick('/measurement-entry')}>Add New Measurement</button>
//             <button type="button" className="btn btn-primary stylish-btn" onClick={() => handleClick('/place-order')}>Place New Order</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExistingCustomer;
















import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ExistingCustomer.css';
import Search from '../../assets/search.svg';

const ExistingCustomer = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className='existing-customer-container'>
      <div className="heading animated-heading">EXISTING CUSTOMER</div>
      <div className="input-container">
        <div className="input-group mb-3 search-bar">
          <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" />
          <span className="input-group-text" id="basic-addon2">
            <img src={Search} alt="Search" />
          </span>
        </div>
      </div>
      <div className="content-container">
        <div className="container d-flex justify-content-center">
          <div className="card stylish-card animated-card">
            <div className="card-body">
              <h5 className="card-title">User Information</h5>
              <p className="card-text"><strong>Name:</strong> Customer 1</p>
              <p className="card-text"><strong>Customer ID:</strong> 100</p>
              <p className="card-text"><strong>Gender:</strong> Male</p>
              <p className="card-text"><strong>Mobile:</strong> 1234567890</p>
              <p className="card-text"><strong>Email:</strong> cus1@gmail.com</p>
              <p className="card-text"><strong>Address:</strong> Anna Nagar, Chennai</p>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <div className="btn-group">
            <button type="button" className="btn btn-primary stylish-btn animated-btn" onClick={() => handleClick('100/measurement-details')}>Measurement Details</button>
            <button type="button" className="btn btn-primary stylish-btn animated-btn" onClick={() => handleClick('/order-details')}>Order Details</button>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-primary stylish-btn animated-btn" onClick={() => handleClick('/measurement-entry')}>Add New Measurement</button>
            <button type="button" className="btn btn-primary stylish-btn animated-btn" onClick={() => handleClick('/place-order')}>Place New Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExistingCustomer;
