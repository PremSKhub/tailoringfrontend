import React from 'react';
import './OrderDetails.css';

const OrderDetails = () => {
  const details = [
    {
      name: 'Customer 1', customerid: 'Cus001', measurementid: '101', typeofdress: 'Shirt',
      fabricdetails: 'Cotton,Blue', orderid: 'ORD001', duedate: '10-08-2024', deliverydate: '12-08-2024',
      status: "completed", payment: 'Paid'
    },
    {
      name: 'Customer 2', customerid: 'Cus002', measurementid: '102', typeofdress: 'Pant',
      fabricdetails: 'Cotton,Sandal', orderid: 'ORD002', duedate: '15-08-2024', deliverydate: '17-08-2024',
      status: "processing", payment: 'Paid'
    },
    {
      name: 'Customer 3', customerid: 'Cus003', measurementid: '103', typeofdress: 'Kurti',
      fabricdetails: 'Cotton,Yellow', orderid: 'ORD003', duedate: '20-08-2024', deliverydate: '22-08-2024',
      status: "pending", payment: 'Paid'
    },
    {
      name: 'Customer 4', customerid: 'Cus004', measurementid: '104', typeofdress: 'Blazer',
      fabricdetails: 'Cotton,Brown', orderid: 'ORD004', duedate: '25-08-2024', deliverydate: '27-08-2024',
      status: "completed", payment: 'Paid'
    },
    {
      name: 'Customer 5', customerid: 'Cus005', measurementid: '105', typeofdress: 'Pant',
      fabricdetails: 'cotton,White', orderid: 'ORD005', duedate: '30-08-2024', deliverydate: '02-09-2024',
      status: "pending", payment: 'Paid'
    },
    
  ];

  return (
    <section className='order-details-container'>
      <h1 className="heading animated-heading">ORDER DETAILS</h1>
      <div className="container mt-5">

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Cus ID</th>
                <th scope="col">Measurement ID</th>
                <th scope="col">Type of Dress</th>
                <th scope="col">Fabric Details</th>
                <th scope="col">Order ID</th>
                <th scope="col">Due Date</th>
                <th scope="col">Delivery Date</th>
                <th scope="col">Status</th>
                <th scope="col">Payment</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail, index) => (
                <tr key={index} className="table-row">
                  <td>{index + 1}</td>
                  <td>{detail.name || '-'}</td>
                  <td>{detail.customerid || '-'}</td>
                  <td>{detail.measurementid || '-'}</td>
                  <td>{detail.typeofdress || '-'}</td>
                  <td>{detail.fabricdetails || '-'}</td>
                  <td>{detail.orderid || '-'}</td>
                  <td>{detail.duedate || '-'}</td>
                  <td>{detail.deliverydate || '-'}</td>
                  <td>
                    <button className={`btn ${detail.status === "completed" ? "btn-success"
                      : detail.status === "processing" ? "btn-warning" : "btn-danger"}`}>{detail.status || 'Pending'}</button>
                  </td>
                  <td>{detail.payment || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default OrderDetails;


