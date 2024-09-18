// import React from 'react';
// import './PlaceOrder.css';
// import Page1Logo from '../../assets/page1logo.png';

// const PlaceOrder = () => {
//   return (
//     <div className="place-order-container container-fluid">
//       <div className="row justify-content-between space">
//         {/* Left Side: Place Order Section */}
//         <div className="col-md-5 order-section">
//           <h1 className="heading text-center cardheading">Place An Order</h1>
//           <form>
//             <div className="mb-3">
//               <label htmlFor="customer-name" className="form-label">Customer's Measurements</label>
//               <select id="customer-name" className="form-select">
//                 <option>Select Customer</option>
//                 <option value="Customer 1">Customer 1</option>
//                 <option value="Customer 2">Customer 2</option>
//                 <option value="Customer 3">Customer 3</option>
//                 <option value="Customer 4">Customer 4</option>
//                 <option value="Customer 5">Customer 5</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="dress-type" className="form-label">Dress Type</label>
//               <select id="dress-type" className="form-select">
//                 <option>Select Dress Type</option>
//                 <option value="Formal">Formal</option>
//                 <option value="Casual">Casual</option>
//                 <option value="Partywear">Partywear</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="fabric-type" className="form-label">Fabric's Details</label>
//               <select id="fabric-type" className="form-select">
//                 <option>Select Fabric</option>
//                 <option value="Cotton">Cotton</option>
//                 <option value="Silk">Silk</option>
//                 <option value="Wool">Wool</option>
//                 <option value="Linen">Linen</option>
//                 <option value="Polyester">Polyester</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="instructions" className="form-label">Special Instructions</label>
//               <textarea id="instructions" className="form-control" rows="3" placeholder="Enter any special instructions"></textarea>
//             </div>
//           </form>
//         </div>

//         {/* Right Side: Bill Receipt Section */}
//         <div className="col-md-5 bill-section">
//           <h2 className="receipt-heading text-center">Bill Receipt</h2>
//           <form>
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label htmlFor="order-id" className="form-label">Order ID</label>
//                   <input type="text" id="order-id" className="form-control" placeholder="Enter Order ID" />
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label htmlFor="customer-id" className="form-label">Customer ID</label>
//                   <input type="text" id="customer-id" className="form-control" placeholder="Enter Customer ID" />
//                 </div>
//               </div>
//             </div>
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label htmlFor="customer-name" className="form-label">Customer Name</label>
//                   <input type="text" id="customer-name" className="form-control" placeholder="Enter Customer Name" />
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label htmlFor="product-price" className="form-label">Product Price</label>
//                   <input type="text" id="product-price" className="form-control" placeholder="Enter Product Price" />
//                 </div>
//               </div>
//             </div>
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label htmlFor="quantity" className="form-label">Quantity</label>
//                   <input type="text" id="quantity" className="form-control" placeholder="Enter Quantity" />
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label htmlFor="cgst" className="form-label">CGST (9%)</label>
//                   <input type="text" id="cgst" className="form-control" placeholder="Enter CGST" />
//                 </div>
//               </div>
//             </div>
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label htmlFor="sgst" className="form-label">SGST (9%)</label>
//                   <input type="text" id="sgst" className="form-control" placeholder="Enter SGST" />
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="mb-3">
//                   <label htmlFor="total" className="form-label">Total</label>
//                   <input type="text" id="total" className="form-control" placeholder="Enter Total" />
//                 </div>
//               </div>
//             </div>
//             <button type="button" className="btn btn-success btn-pay">Pay</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;






























// import React, { useState } from 'react';
// import './PlaceOrder.css';

// const PlaceOrder = () => {
//   // Generate random values for Order ID, Customer ID, and Customer Name
//   const randomOrderId = Math.floor(Math.random() * 100000);
//   const randomCustomerId = Math.floor(Math.random() * 10000);
//   const randomCustomerName = `Customer ${Math.floor(Math.random() * 5 + 1)}`;

//   // State for quantity and price input
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(100); // Initial price set to 100 Rupees

//   // Functions to handle quantity increase and decrease
//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

//   return (
//     <div className="place-order-container container-fluid">
//       <div className="row justify-content-between space">
//         {/* Left Side: Place Order Section */}
//         <div className="col-md-5 order-section">
//           <h1 className="heading text-center cardheading">Place An Order</h1>
//           <form>
//             <div className="mb-3">
//               <label htmlFor="customer-name" className="form-label">Customer's Measurements</label>
//               <select id="customer-name" className="form-select">
//                 <option>Select Customer</option>
//                 <option value="Customer 1">Customer 1</option>
//                 <option value="Customer 2">Customer 2</option>
//                 <option value="Customer 3">Customer 3</option>
//                 <option value="Customer 4">Customer 4</option>
//                 <option value="Customer 5">Customer 5</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="dress-type" className="form-label">Dress Type</label>
//               <select id="dress-type" className="form-select">
//                 <option>Select Dress Type</option>
//                 <option value="Formal">Formal</option>
//                 <option value="Casual">Casual</option>
//                 <option value="Partywear">Partywear</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="fabric-type" className="form-label">Fabric's Details</label>
//               <select id="fabric-type" className="form-select">
//                 <option>Select Fabric</option>
//                 <option value="Cotton">Cotton</option>
//                 <option value="Silk">Silk</option>
//                 <option value="Wool">Wool</option>
//                 <option value="Linen">Linen</option>
//                 <option value="Polyester">Polyester</option>
//               </select>
//             </div>

//             {/* Quantity and Price Section */}
//             <div className="mb-3">
//               <label htmlFor="quantity" className="form-label">Quantity</label>
//               <div className="input-group">
//                 <button type="button" className="btn btn-secondary" onClick={decreaseQuantity}>-</button>
//                 <input
//                   type="text"
//                   id="quantity"
//                   className="form-control"
//                   value={quantity}
//                   readOnly
//                 />
//                 <button type="button" className="btn btn-secondary" onClick={increaseQuantity}>+</button>
//               </div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="price" className="form-label">Price (₹)</label>
//               <div className="input-group">
//                 <button type="button" className="btn btn-secondary" onClick={() => setPrice(price - 10)}>-</button>
//                 <input
//                   type="text"
//                   id="price"
//                   className="form-control"
//                   value={price}
//                   readOnly
//                 />
//                 <button type="button" className="btn btn-secondary" onClick={() => setPrice(price + 10)}>+</button>
//               </div>
//             </div>

//             {/* Add Item Button */}
//             <button type="button" className="btn btn-primary add-item-btn">Add Item</button>
//           </form>
//         </div>

//         {/* Right Side: Bill Receipt Section */}
//         <div className="col-md-5 bill-section">
//           <h2 className="receipt-heading text-center">Bill Receipt</h2>
//           <form>
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label htmlFor="order-id" className="form-label">Order ID</label>
//                 <input type="text" id="order-id" className="form-control" value={randomOrderId} disabled />
//               </div>
//               <div className="col-md-6">
//                 <label htmlFor="customer-id" className="form-label">Customer ID</label>
//                 <input type="text" id="customer-id" className="form-control" value={randomCustomerId} disabled />
//               </div>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="customer-name" className="form-label">Customer Name</label>
//               <input type="text" id="customer-name" className="form-control" value={randomCustomerName} disabled />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="product-price" className="form-label">Product Price (₹)</label>
//               <input type="text" id="product-price" className="form-control" value={price} disabled />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="quantity" className="form-label">Quantity</label>
//               <input type="text" id="quantity" className="form-control" value={quantity} disabled />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="cgst" className="form-label">CGST (5%)</label>
//               <input type="text" id="cgst" className="form-control" value="5%" disabled />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="sgst" className="form-label">SGST (5%)</label>
//               <input type="text" id="sgst" className="form-control" value="5%" disabled />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="total" className="form-label">Total (₹)</label>
//               <input type="text" id="total" className="form-control" value={(price * quantity * 1.1).toFixed(2)} disabled />
//             </div>

//             <button type="button" className="btn btn-success btn-pay">Pay</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;



































import React, { useState } from 'react';
import './PlaceOrder.css';

const PlaceOrder = () => {
  // State for quantity and price input
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(100); // Initial price set to 100 Rupees

  // Functions to handle quantity increase and decrease
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className='place-order-container'>
      {/* Page Title */}
      <h1 className="heading animated-heading">PLACE NEW ORDER</h1>

      {/* Forms Section */}
      <div className="row conatiner-margin justify-content-between form-section">
        {/* Left Side: Place Order Section */}
        <div className="col-md-5 order-section">
          <h2 className="form-heading text-center">Place An Order</h2>
          <form>
            {/* Customer's Measurements */}
            <div className="mb-3">
              <label htmlFor="customer-measurements" className="form-label">Customer's Measurements</label>
              <select id="customer-measurements" className="form-select">
                <option>Select Customer</option>
                <option value="Customer 1">Customer 1</option>
                <option value="Customer 2">Customer 2</option>
                <option value="Customer 3">Customer 3</option>
                <option value="Customer 4">Customer 4</option>
                <option value="Customer 5">Customer 5</option>
              </select>
            </div>

            {/* Dress Type */}
            <div className="mb-3">
              <label htmlFor="dress-type" className="form-label">Dress Type</label>
              <select id="dress-type" className="form-select">
                <option>Select Dress Type</option>
                <option value="Formal">Formal</option>
                <option value="Casual">Casual</option>
                <option value="Partywear">Partywear</option>
              </select>
            </div>

            {/* Fabric Details */}
            <div className="mb-3">
              <label htmlFor="fabric-type" className="form-label">Fabric's Details</label>
              <select id="fabric-type" className="form-select">
                <option>Select Fabric</option>
                <option value="Cotton">Cotton</option>
                <option value="Silk">Silk</option>
                <option value="Wool">Wool</option>
                <option value="Linen">Linen</option>
                <option value="Polyester">Polyester</option>
              </select>
            </div>

            {/* Quantity and Price Section */}
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">Quantity</label>
              <div className="input-group">
                <button type="button" className="btn btn-secondary" onClick={decreaseQuantity}>-</button>
                <input
                  type="text"
                  id="quantity"
                  className="form-control"
                  value={quantity}
                  readOnly
                />
                <button type="button" className="btn btn-secondary" onClick={increaseQuantity}>+</button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price (₹)</label>
              <div className="input-group">
                <button type="button" className="btn btn-secondary" onClick={() => setPrice(price - 10)}>-</button>
                <input
                  type="text"
                  id="price"
                  className="form-control"
                  value={price}
                  readOnly
                />
                <button type="button" className="btn btn-secondary" onClick={() => setPrice(price + 10)}>+</button>
              </div>
            </div>

            {/* Add Item Button */}
            <button type="button" className="btn btn-primary add-item-btn">Add Item</button>
          </form>
        </div>

        {/* Right Side: Bill Receipt Section */}
        <div className="col-md-5 bill-section">
          <h2 className="form-heading text-center">Bill Receipt</h2>
          <form>
            {/* Order ID and Customer ID */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="order-id" className="form-label">Order ID</label>
                <input type="text" id="order-id" className="form-control" value="12345" disabled />
              </div>
              <div className="col-md-6">
                <label htmlFor="customer-id" className="form-label">Customer ID</label>
                <input type="text" id="customer-id" className="form-control" value="98765" disabled />
              </div>
            </div>

            {/* Customer Name */}
            <div className="mb-3">
              <label htmlFor="customer-name" className="form-label">Customer Name</label>
              <input type="text" id="customer-name" className="form-control" value="Customer 1" disabled />
            </div>

            {/* Product Price and Quantity */}
            <div className="mb-3">
              <label htmlFor="product-price" className="form-label">Product Price (₹)</label>
              {/* <input type="text" id="product-price" className="form-control" value={price} disabled /> */}
            </div>

            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">Quantity</label>
              {/* <input type="text" id="quantity" className="form-control" value={quantity} disabled /> */}
            </div>

            {/* CGST and SGST */}
            <div className="mb-3">
              <label htmlFor="cgst" className="form-label">CGST (5%)</label>
              {/* <input type="text" id="cgst" className="form-control" value="5%" disabled /> */}
            </div>

            <div className="mb-3">
              <label htmlFor="sgst" className="form-label">SGST (5%)</label>
              {/* <input type="text" id="sgst" className="form-control" value="5%" disabled /> */}
            </div>

            {/* Total */}
            <div className="mb-3">
              <label htmlFor="total" className="form-label">Total (₹)</label>
              {/* <input type="text" id="total" className="form-control" value={(price * quantity * 1.1).toFixed(2)} disabled /> */}
            </div>

            {/* Pay Button */}
            <button type="button" className="btn btn-success btn-pay">Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

























































