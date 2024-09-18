import { Routes, Route } from "react-router-dom";

import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import ExistingCustomer from './components/ExistingCustomer/ExistingCustomer'
import NewCustomer from './components/NewCustomer/NewCustomer'
import './App.css'
import MeasurementEntry from './components/MeasurementEntry/MeasurementEntry'
import MeasurementDetails from './components/MeasurementDetails/MeasurementDetails'
import OrderDetails from './components/OrderDetails/OrderDetails'
import Appointment from './components/Appointment/Appointment'
import PlaceOrder from './components/PlaceOrder/PlaceOrder'
import NavBar from "./components/NavBar/NavBar";
import ProductedRoute from "./components/ProductedRoute/ProductedRoute";
import { useState } from "react";

function App() {
const [isAuth, setAuth]= useState(localStorage.getItem("LoginApproved")=="true")


  return (
    <>
      {
        isAuth && <NavBar authHandler={setAuth}></NavBar>
      }
      {/* {<Login></Login>} */}
      {/* {<SignUp></SignUp>} */}
      {/* <Home></Home> */}
      {/* <ExistingCustomer></ExistingCustomer> */}
      {/* <NewCustomer></NewCustomer> */}
      {/* <MeasurementEntry></MeasurementEntry> */}
      {/* <MeasurementDetails></MeasurementDetails> */}
      {/* <OrderDetails></OrderDetails> */}
      {/* <Appointment></Appointment> */}
      {/* <PlaceOrder></PlaceOrder> */}
      <Routes>
        <Route path="/login" element={<Login authHandler={setAuth}></Login>}/> 
        <Route path="/register" element={<SignUp></SignUp>}/> 
        <Route element={<ProductedRoute isAuth={isAuth}></ProductedRoute>}>
        <Route path="/home" element={<Home></Home>}/> 
        <Route path="/" element={<Home></Home>}/> 
        <Route path="/existing-customer" element={<ExistingCustomer></ExistingCustomer>}/>
        <Route path="/existing-customer/:id/measurement-details" element={<MeasurementDetails></MeasurementDetails>}/>
        <Route path="/new-customer" element={<NewCustomer></NewCustomer>}/> 
        <Route path="/measurement-entry" element={<MeasurementEntry></MeasurementEntry>}/> 
        <Route path="/measurement-details" element={<MeasurementDetails></MeasurementDetails>}/>
        <Route path="/order-details" element={<OrderDetails></OrderDetails>}/>
        <Route path="/appointment" element={<Appointment></Appointment>}/>
        <Route path="/place-order" element={<PlaceOrder></PlaceOrder>}/>
        </Route>
        
      </Routes>
    </>

  )
}

export default App
